export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send('["WAWebE2EProtoParser","parseMsgProto"]');
}
