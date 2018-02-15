import React from 'react';
import ReactDOM from 'react-dom';


var fbpGraph = window.TheGraph.fbpGraph;

var editor = document.getElementById('maincontent');

var library = {
    basic: {
        name: 'basic',
        description: 'basic demo component',
        icon: 'eye',
        inports: [
            { 'name': 'in0', 'type': 'all' },
            { 'name': 'in1', 'type': 'all' },
            { 'name': 'in2', 'type': 'all' }
        ],
        outports: [
            { 'name': 'out', 'type': 'all' }
        ]
    },
    tall: {
        name: 'tall',
        description: 'tall demo component',
        icon: 'cog',
        inports: [
            { 'name': 'in0', 'type': 'all' },
            { 'name': 'in1', 'type': 'all' },
            { 'name': 'in2', 'type': 'all' },
            { 'name': 'in3', 'type': 'all' },
            { 'name': 'in4', 'type': 'all' },
            { 'name': 'in5', 'type': 'all' },
            { 'name': 'in6', 'type': 'all' },
            { 'name': 'in7', 'type': 'all' },
            { 'name': 'in8', 'type': 'all' },
            { 'name': 'in9', 'type': 'all' },
            { 'name': 'in10', 'type': 'all' },
            { 'name': 'in11', 'type': 'all' },
            { 'name': 'in12', 'type': 'all' }
        ],
        outports: [
            { 'name': 'out0', 'type': 'all' }
        ]
    }
};

var graph = new fbpGraph.Graph();

function renderEditor() {
    var props = {
        readonly: false,
        height: window.innerHeight,
        width: window.innerWidth,
        graph: graph,
        library: library,
    };

    var editor = document.getElementById('maincontent');
    editor.width = props.width;
    editor.height = props.height;
    var element = React.createElement(window.TheGraph.App, props);
    ReactDOM.render(element, editor);
}
graph.on('endTransaction', renderEditor);
//window.addEventListener("resize", renderEditor);

export var addnode = function (ev) {
    //alert('fine'); return;
    var id = Math.round(Math.random() * 100000).toString(36);
    var component = Math.random() > 0.5 ? 'basic' : 'tall';
    /*var metadata = {
        label: component,
        x: Math.round(Math.random() * 800),
        y: Math.round(Math.random() * 600)
    };*/
    var metadata = {
        label: component,
        x: ev.clientX,
        y: ev.clientY
    };
    var newNode = graph.addNode(id, component, metadata);
    return newNode;
};
//document.getElementById("addnode").addEventListener("click", addnode);

var addedge = function (outNodeID) {
    var nodes = graph.nodes;
    var len = nodes.length;
    if (len < 1) { return; }
    var node1 = outNodeID || nodes[Math.floor(Math.random() * len)].id;
    var node2 = nodes[Math.floor(Math.random() * len)].id;
    var port1 = 'out' + Math.floor(Math.random() * 3);
    var port2 = 'in' + Math.floor(Math.random() * 12);
    var meta = { route: Math.floor(Math.random() * 10) };
    var newEdge = graph.addEdge(node1, port1, node2, port2, meta);
    return newEdge;
};
      //document.getElementById("addedge").addEventListener("click", function(event) { addedge() });

      /*document.getElementById("random").addEventListener("click", function () {
        graph.startTransaction('randomgraph');
        for (var i=0; i<20; i++) {
          var node = addnode();
          addedge(node.id);
          addedge(node.id);
        }
        graph.endTransaction('randomgraph');
      });

      document.getElementById("get").addEventListener("click", function () {
        var graphJSON = JSON.stringify(graph.toJSON(), null, 2);
        alert(graphJSON);
      });

      document.getElementById("clear").addEventListener("click", function () {
        graph = new fbpGraph.Graph();
        renderEditor();
      });*/
