import events from "../../data/events.json";

export default function handler(req, res) {
  res.status(200).json(events);
}
