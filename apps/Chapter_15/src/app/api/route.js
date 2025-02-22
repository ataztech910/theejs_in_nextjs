import { NextResponse } from "next/server";
const mockData = [
  {
    id: "g1oxhn4nv1",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv2",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv3",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv4",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv5",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv6",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  {
    id: "g1oxhn4nv7",
    name: "Object 1",
    type: "motion",
    status: "active",
  },
  // Add more data here, just follow the pattern of the first element
];

export async function GET(request, context) {
  // This operator will return the object as a server response
  // We use NextResponse because it creates also a status header
  return NextResponse.json({ data: mockData }, { status: 200 });
}

export async function POST(request, _) {
  const data = await request.json();
  mockData.push({
    id: "newID-123",
    name: data.name,
    type: "motion",
    status: "not active",
  });
  return NextResponse.json({ status: "OK" }, { status: 200 });
}
