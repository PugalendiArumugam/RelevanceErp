export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("Contact form submission:", payload);

    return Response.json(
      { success: true, message: "Submission received." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form parsing error:", error);
    return Response.json(
      { success: false, message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
