import pastors from "../../data/pastors.json";

export default function handler(req, res) {
  res.status(200).json(pastors);
}
