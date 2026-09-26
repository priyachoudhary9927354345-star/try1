import { searchEntries } from "@/lib/curriculum";

export const dynamic = "force-static";

export function GET() {
  return Response.json(searchEntries());
}
