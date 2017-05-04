import {Component} from 'angular2/core';


@Component({
	selector: 'weather-item',
	template: `
		<article>
			<div class="col-1">
			<h3>City name</h3>
			<p class="info"> Clouds</p>
			</div>
			<div class="col-1">
			</div>
		</article>
	`,
})

export class WeatherItemComponent{

}

