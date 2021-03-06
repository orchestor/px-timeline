var nodeEl,
    minusIcon,
    iconDiv,
    listNode,
    leftNodeBox,
    nodeElRoot;

document.addEventListener("WebComponentsReady", function() {
  runTests();
});

function runTests() {

  suite('Check base timeline node properties', function() {
    suiteSetup(function(done) {
      nodeEl = Polymer.dom(document).querySelector('px-timeline-node');
      listNode = {
        "metaData": {
          "editedBy": "GE Digital",
          "editedDate": "Tue Sep 20 2016 17:28:10 GMT-0700 (PDT)"
        },
        "content": {
          "title": "Building the industrial internet",
          "bodyType": "text",
          "body": [
            {
              "text": "On Tuesday, GE CEO Jeff Immelt and Intel CEO Brian Krzanich spoke at the Intel Developer Forum in San Francisco about the partnership and the future of the Industrial Internet. They noted this is a significant step in the two companies’ plan to eventually offer GE’s Industrial Internet software on Intel-powered devices.",
              "headline": "This is the content headline",
              "isComment": true
            }
          ]
        }
      };
      nodeEl.timelineMetadata = listNode.metaData;
      nodeEl.timelineContent = listNode.content;
      nodeEl.autoShowContent = true;
      nodeEl.timelineIndex = 0;
      nodeEl.indexEven = true;
      nodeEl.nodePosition = 'Left Side';
      done();
    });

    test('timeline auto show node content is true', function(done){
      assert.isTrue(nodeEl.autoShowContent);
      done();
    });

    test('timeline metaData editedBy equals GE Digital', function(done){
      assert.equal(nodeEl.timelineMetadata.editedBy, 'GE Digital');
      done();
    });

    test('timeline content title equals "FBuilding the industrial internet"', function(done){
      assert.equal(nodeEl.timelineContent.title, 'Building the industrial internet');
      done();
    });

    test('timeline content bodyType equals TEXT', function(done){
      assert.equal(nodeEl.timelineContent.bodyType.toUpperCase(), 'TEXT');
      done();
    });

  });

  suite('Check VIDEO timeline node properties', function() {
    suiteSetup(function(done) {
      nodeEl = Polymer.dom(document).querySelector('px-timeline-node');
      listNode = {
        "metaData": {
          "editedBy": "Google Chrome Developers",
          "editedDate": "Tue Sep 20 2016 16:28:10 GMT-0700 (PDT)",
          "editorImg": "img/immelt.jpg",
          "editorTitle": "Chief Field Scientist",
          "percent": "80"
        },
        "content": {
          "title": "Lazy loading data with app-route",
          "bodyType": "Video",
          "body": [
            {
              "video": "video/sample-video.mp4",
              "headline": "This is the content headline",
              "text": "Thanks to Rob Dobson",
              "host": "local",
              "isComment": true
            }
          ]
        }
      };
      nodeEl.timelineMetadata = listNode.metaData;
      nodeEl.timelineContent = listNode.content;
      nodeEl.autoShowContent = true;
      nodeEl.timelineIndex = 0;
      nodeEl.indexEven = true;

      done();
    });

    test('timeline metaData editedBy equals Google Chrome Developers', function(done){
      assert.equal(nodeEl.timelineMetadata.editedBy, 'Google Chrome Developers');
      done();
    });

    test('timeline metaData editedBy equals "Lazy loading data with app-route"', function(done){
      assert.equal(nodeEl.timelineContent.title, 'Lazy loading data with app-route');
      done();
    });

    test('timeline content bodyType equals Video', function(done){
      assert.equal(nodeEl.timelineContent.bodyType.toUpperCase(), 'VIDEO');
      done();
    });
  });
}
