const config = {
	srfCapitalUrl: 'https://srf.capital',
	srfImpactUrl: 'https://srfimpact.org',
}

if (process.env?.NODE_ENV === 'development') {
	config.srfCapitalUrl = `http://localhost:${process.env.PORT || 4322}`
	config.srfImpactUrl = `http://localhost:${process.env.PORT || 4321}`
} else if (process.env?.VERCEL_ENV === 'preview') {
	config.srfCapitalUrl = 'http://srfcapital.vercel.app'
	config.srfImpactUrl = 'http://srfimpact.vercel.app'
}

export default config
