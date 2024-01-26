import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

const SUPABASE_URL = "https://zbnpfmfqljkvqvagscev.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibnBmbWZxbGprdnF2YWdzY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyOTc2NTAsImV4cCI6MjAyMTg3MzY1MH0.Wu7JtZ5PRCDJvjNbv3b7WKh3BJvXg01gs06WDlyGmNM";
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) { // Cria coisas
    console.log(req.body.emailNewsletter);
    res
      .status(httpStatus.Success)
      .json({ message: "Post request!" });
  },
  async GET(req: NextApiRequest, res: NextApiResponse) { // Retorna coisas
    const { data, error } = await dbClient.from("newsletter_users")
      .select("*")
    console.log(data);
    console.log(error);


    res
      .status(httpStatus.Success)
      .json({ message: "Get request!" });
  }
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const controller = controllerByMethod[request.method];
  if (!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }

  controller(request, response);
}
