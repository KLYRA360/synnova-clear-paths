import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
  consent: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, consent }: SubscribeRequest = await req.json();

    // Validate input
    if (!email || !consent) {
      return new Response(
        JSON.stringify({ error: "Email and consent are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const brevoApiKey = Deno.env.get("BREVO_API_KEY");
    const listId = Deno.env.get("BREVO_LIST_ID");
    const templateId = Deno.env.get("BREVO_DOI_TEMPLATE_ID");
    const redirectUrl = Deno.env.get("BREVO_REDIRECT_OK");

    if (!brevoApiKey || !listId || !templateId || !redirectUrl) {
      console.error("Missing Brevo configuration");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Call Brevo API for double opt-in confirmation
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts/doubleOptinConfirmation",
      {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          includeListIds: [parseInt(listId)],
          templateId: parseInt(templateId),
          redirectionUrl: redirectUrl,
        }),
      }
    );

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo API error:", brevoResponse.status, errorText);
      
      // Try to parse error details
      let brevoError;
      try {
        brevoError = JSON.parse(errorText);
        console.error("Brevo error details:", JSON.stringify(brevoError, null, 2));
      } catch (e) {
        console.error("Could not parse Brevo error response");
      }
      
      // Handle specific error cases with detailed messages
      if (brevoResponse.status === 400) {
        const detailedMessage = brevoError?.message || brevoError?.code || "Cette adresse email est invalide ou déjà inscrite";
        return new Response(
          JSON.stringify({ 
            error: detailedMessage,
            brevoCode: brevoError?.code,
            details: errorText 
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          error: "Erreur lors de l'inscription",
          details: errorText 
        }),
        {
          status: brevoResponse.status,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Newsletter subscription successful for:", email);

    return new Response(
      JSON.stringify({ ok: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in subscribe function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erreur interne du serveur" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
