<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div id="map-wrap" style="height: 100vh">
      <no-ssr>
        <l-map :zoom=13 :center="[6.901966123343937,79.87339605530008]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[6.901966123343937,79.87339605530008]"></l-marker>
          <l-marker :lat-lng="[6.932610753349443,79.84941487064081]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>
