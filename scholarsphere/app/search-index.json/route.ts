import { searchIndex } from "@/lib/curriculum";

export const dynamic = "force-static";

export function GET() {
  return Response.json(searchIndex());
}
