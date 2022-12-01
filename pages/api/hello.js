export default function handler(req, res) {
  console.log("== api log ==")
  console.log(process.env);
  res.status(200).json({
    text: `Hello! process.env.NEXT_PUBLIC_API_URL="${process.env.NEXT_PUBLIC_API_URL}" AND process.env.API_URL="${process.env.API_URL}"`,
  });
}
