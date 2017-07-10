// dato.config.js

module.exports = (dato, root, i18n) => {
  i18n.locale = 'en';
  // inside a "src/laptopStands" directory...
  root.directory("dist/data/laptop_stands", (laptopStandsDir) => {

    //foreach locale
    i18n.availableLocales.forEach((locale) => {
      // switch to the nth locale
      i18n.withLocale(locale, () => {
			dato.laptopStands.forEach((laptopStand) => {

                let sizes = [];
                laptopStand.size.forEach((size) =>{
                    sizes.push({ name : size.name, slug : size.slug });
                });

				// ...and create a markdown file for each article!
				laptopStandsDir.createPost(
					`${locale}/${laptopStand.slug}.json`, "json", {
						frontmatter: {
							title: laptopStand.title,
                            slug: laptopStand.slug,
							description:laptopStand.description,
                            sizes: sizes
						},
					}
				);
			});
		});
    });


  });

};