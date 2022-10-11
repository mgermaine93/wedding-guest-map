# Wedding Map

## Description

After writing scores of thank-you notes for my recent wedding, I realized that the dataset of people I had on hand provided an excellent opportunity to experiment with Leaflet. [Leaflet](https://leafletjs.com/) is a tool that I've been meaning to learn for some time, and this project proved to be an incredible way to engage with maps and data in a way about which I cared deeply. I hope you enjoy it!

## Goals

In designing the project, I wanted to be able to do the following:

- Plot each wedding guest on a map based on where they lived at the time of my wedding.
- Display a heatmap/choropleth diagram that visualized the most popular states of residence for guests.
- Dynamically plot/remove points based on a variety of guest factors (bride's side/groom's side, friends/family, etc.)

## Future Goals

My main future goal with this project is to incorporate the [MarkerCluster](https://github.com/Leaflet/Leaflet.markercluster) Leaflet plugin. There are a number of instances where, because I plotted each individual person, multiple points fall on the exact same coordinates (e.g., families that live together). Short of slightly adjusting the coordinates for each set of guests that live together, MarkerCluster seems like it would be the best way to truly visualize all of the points on the map.

Perhaps I can further explore this by making the heatmap dynamic as well, but for now I'm satisfied with the project as it stands.

## Credits

The following links/attributions greatly assisted me with this project. In no particular order:

- <a href="https://www.flaticon.com/free-icons/church" title="church icons">Church icons created by Freepik - Flaticon</a>.
- The official Leaflet [tutorials](https://leafletjs.com/examples.html) and [documentation](https://leafletjs.com/reference.html).
- [Colorbrewer](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3), for generating a lovely color gradient for the heatmap.
- [Mike Bostock](https://bost.ocks.org/mike/) and [Leaflet](https://leafletjs.com/examples/choropleth/) for the US states GeoJSON data.
- Various [StackOverflow](https://stackoverflow.com/) articles, as always.
