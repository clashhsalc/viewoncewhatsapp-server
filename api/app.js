export default function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('["WAWebE2EProtoParser","parseMsgProto"]');
}
