export async function getHealth() {
  const response = await fetch("http://localhost:5000/");

  if (!response.ok) {
    throw new Error("Failed to connect to backend");
  }

  return response.json();
}