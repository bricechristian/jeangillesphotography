import Iframe from "sanity-plugin-iframe-pane";

const getPreviewURL = (doc) => {
	// console.log(doc)
	return doc?.slug?.current
		? `${
				process.env.VERCEL_URL || "http://localhost:3000"
		  }/api/preview?type=${doc._type}&slug=${doc.slug.current}`
		: `${process.env.VERCEL_URL || "http://localhost:3000"}`;
};

export const adminStructure = (S) =>
	S.list()
		.title("Content")
		.items([
			S.documentTypeListItem("page"),
			S.divider(),
			S.documentTypeListItem("photography"),
			S.divider(),
			S.documentTypeListItem("menu"),
			S.divider(),
			S.listItem()
				.title("Site Settings")
				.child(S.document().schemaType("global").documentId("global"))			
		]);

export const defaultDocumentNode = (S, { schemaType }) => {
	// console.log(S)
	if (schemaType === "photography" || schemaType == "page") {
		return S.document().views([
			S.view.form(),
			S.view
				.component(Iframe)
				.options({
					// Required: Accepts an async function
					// OR a string
					url: (doc) => getPreviewURL(doc),
					defaultSize: `desktop`,
					reload: {
						button: true, //  default `undefined`
					},
				})
				.title("Preview"),
		]);
	}
};
