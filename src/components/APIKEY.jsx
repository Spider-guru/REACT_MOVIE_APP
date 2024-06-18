export default function ApiKey() {
	let key = import.meta.env.VITE_APIKEY;
	return key;
}
