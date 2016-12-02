List of things to do to a Sass repo to make it a fancy demo:

1. Copy in new boilerplate stuff, overwriting any conflicts
2. Add new package.json dev dependencies (all gulp stuff, same for every repo)
3. Add new bower.json dev dependencies (different for every repo, depends on what it needs to show itself in the demo)
4. Create a `sass/px-[MODULENAME]-design-demo.css` file, import all the Sass needed to show the component and import the component itself
5. Run `gulp demosass`
6. Update the Sassdoc comments in the module’s sass file (i.e. `_objects.toggle.scss`) with new @groups for all variables and better descriptions
7. Copy `__new_index.html` to `index.html` and describe the component/create your demo/etc
8. Update the README.md with the resulting index.html
