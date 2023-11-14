<script>
  import esriConfig from "@arcgis/core/config";
  import MapView from "@arcgis/core/views/MapView";
  import Map from "@arcgis/core/Map";
  import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
  import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
  import Graphic from "@arcgis/core/Graphic";
  import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
  import "@arcgis/core/assets/esri/themes/light/main.css";

  esriConfig.apiKey =
    "AAPK77b67524572349b8b5df44655f368923grzTysj-uIREgjCMU52otjoA4UoQQKnPQTf0dWkjDkAH7SjBxJWGEyk_NvR-MelB";

  let map, streetTrees;

  const createMap = (domNode) => {
    //Create a map object
    map = new Map({
      basemap: "arcgis/topographic",
    });

    //Specify location and zoom level that the map starts on
    const view = new MapView({
      container: domNode,
      map: map,
      zoom: 14,
      center: [-80.5238211, 43.4650994], // longitude, latitude
    });

    //Specify layer symbology
    const streetTreesRenderer = {
      type: "simple",
      symbol: {
        type: "simple-marker",
        style: "circle",
        color: "green",
        size: "14px",
        outline: {
          color: "white",
          width: 1,
        },
      },
    };

    //Specify a template for the popup that appears when you click on a street tree
    const popup = {
      title: "{English_Name}",
      content: [{
        type: "fields",
        fieldInfos: [
          {
            fieldName: "DBH",
            label: "Diameter at Breast Height",
            visible: true,
          },
          {
            fieldName: "Species_at_Risk",
            label: "At Risk Species",
            visible: true,
          },
          {
            fieldName: "Native_to_Ontario",
            label: "Native Species",
            visible: true,
          },
          {
            fieldName: "Ontario_Tree_Atlas_Entry",
            label: "Ontario Tree Atlas Entry",
            visible: true,
          },
          {
            fieldName: "Trees_of_Canada_Entry",
            label: "Trees of Canada Entry",
            visible: true,
          },
        ],
      }],
    };

    //Create a layer object to import the street trees layer from ArcGIS Online
    streetTrees = new FeatureLayer({
      url: "https://services1.arcgis.com/DwLTn0u9VBSZvUPe/arcgis/rest/services/Uptown_Trees_Joined/FeatureServer",
      renderer: streetTreesRenderer,
      popupTemplate: popup,
    });

    //Add the street trees layer to your map
    map.add(streetTrees);
  };

  //Buffer trees function
  function bufferTrees() {
    if (map.layers._items.length < 2) {
      const sym = {
        type: "simple-fill",
        color: [10, 10, 10, 0.5],
        style: "solid",
        outline: {
          color: [0, 0, 0, 0],
          width: 1,
        },
      };
      streetTrees.queryFeatures().then((results) => {
        const graphicsLayer = new GraphicsLayer({
          title: "buffer"
        });
        results.features.map((feat) => {
          const buffer = geometryEngine.geodesicBuffer(
            feat.geometry,
            feat.attributes.DBH && feat.attributes.DBH !== 0
              ? feat.attributes.DBH / 3
              : 10,
            "meters"
          );
          setTimeout(() => {
            const bufferGraphic = new Graphic({ geometry: buffer, symbol: sym });
            graphicsLayer.add(bufferGraphic);
          }, 10)
        });
        map.add(graphicsLayer, 0);
      });
    }
  }
</script>

<main>
  <div class="title">
    <h3>My first webmap!</h3>
  </div>
  <div class="view" use:createMap />
  <div class="footer">
    <button on:click={bufferTrees}>Buffer</button>
  </div>
</main>

<style>
  .title {
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 5%;
  }
  .view {
    height: 80vh;
    width: 100vw;
  }
  .footer {
    height: 10vh;
    display: flex;
    align-items: center;
    padding-left: 5%;
  }
</style>
