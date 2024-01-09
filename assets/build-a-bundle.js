// If no bundle-builder element exists. I.e. this is the first section included that uses the bundle-builder element
if (!customElements.get("bundle-builder")) {
  // Create the bundle-builder element
  customElements.define(
    "bundle-builder",
    class BundleBuilder extends HTMLElement {
      // Set the constructor up to run when the element is created
      constructor() {
        super();
        // Set up the bundle array
        this.bundle = [];
        // Set up the event listeners
        this.setEventListeners();
      }
      // Set up the event listeners for the add to bundle buttons
      setEventListeners() {
        // Get all the add to bundle buttons
        const $addToBundleButtons = this.querySelectorAll(
          ".bundle-add-product"
        );
        // Loop through the buttons
        $addToBundleButtons.forEach(($button) => {
          // Add an event listener to each button
          $button.addEventListener("click", (e) => {
            // Get the id of the product
            const id = e.target.closest("product-card").dataset.id;
            // Get the title of the product
            const title = e.target.closest("product-card").dataset.title;
            // Add the id to the bundle array
            this.bundle.push({
              id: id,
              quantity: 1,
              title: title,
            });
            // Log the bundle array
            console.log(this.bundle);
            // Update the bundle
            this.updateBundle();
          });
        });
      }
      // Update the bundle
      updateBundle() {
        // Get the bundle element
        const $bundleList = this.querySelector(".bundle-product-list");
        // Update the bundle list
      }
    }
  );
}
