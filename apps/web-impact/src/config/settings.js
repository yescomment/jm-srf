import astroConfig from "../../astro.config.mjs";

export default {
	title: `SRF Impact`,
	description: `Built on justice and dedicated to building the equitable economies of the future.`,
	url: astroConfig.site?.replace(/\/+$/,''), // No trailing slash!
	name: `SRF Impact`, // The short name of the business or brand name. Used for things like the copyright in the footer.
  enableThemeSwitcher: true,
  showLittleSticksPlug: false, // Disable this if you want to remove the Little Sticks plug from the footer. (╯°□°)╯︵ ┻━┻
};
