import React, { Component } from 'react';
import {drop, allowDrop, drag} from '../drop-down/DropDown';
import './OuterHtml.css';
import { addnode } from '../create-table/CreateTable';

class OuterHtml extends Component {
  render() {
    return (
      <div id="page">
			<div id="menuleftcontent">
				<a href="#" draggable="true" onDragStart={drag}>userTable</a>
			</div>
			<div id="maincontent" onDrop={addnode}  onDragOver={allowDrop}>
				<div id="firstcontent">firstcontent</div>
				<div id="secondcontent">secondcontent</div>
			</div>
			<div id="clearingdiv"></div>
		</div>
    );
  }
}

export default OuterHtml;
