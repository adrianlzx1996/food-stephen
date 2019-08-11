import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer bJOKjbq4dkPAlSIQUp8LaacuY1DmmW8fVtal68XydmFGWMgJc3jo61F7HWVEHqUVOT6N17e-FzwNG542Jt48EP4Vnn2dtmZBqDNRicA6mItY97vYSoYak85KeilMXXYx"
	}
});
