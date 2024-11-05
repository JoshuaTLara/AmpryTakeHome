import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request body
    const { name, email, comments } = await request.json();

    // Get the Slack webhook URL from the environment variables
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    // Check if the webhook URL exists
    if (!slackWebhookUrl) {
      return NextResponse.json({ error: "Slack Webhook URL is not configured." }, { status: 500 });
    }

    // Format message for Slack
    const slackMessage = {
      text: `New Form Submission:\nName: ${name}\nEmail: ${email}\nComments: ${comments}`,
    };

    console.log("Slack Payload:", slackMessage);

    // Send message to Slack Webhook
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slackMessage),
    });

    // Check if the Slack request was successful
    if (!slackResponse.ok) {
      return NextResponse.json({ error: "Failed to send message to Slack" }, { status: 500 });
    }

    // Respond with success if everything went well
    return NextResponse.json({ message: "Form submitted and Slack notification sent." });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json({ error: "Failed to process form submission" }, { status: 500 });
  }
}

