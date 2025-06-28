<template>
    <article data-aos="fade-right" data-aos-duration="2000" data-aos-delay="500">
      <p class="paragraph-md" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum quam sed eros volutpat, viverra auctor est dictum. Ut facilisis eros sit amet mi euismod, ut bibendum arcu mollis. Cras placerat turpis non mi porta laoreet. <br /> <br />
          Vestibulum ultrices rhoncus diam ac aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum eu ipsum ut dignissim. Quisque suscipit augue a dictum rhoncus. Mauris odio libero, pulvinar at accumsan et, pretium quis nibh. Quisque in purus tempor, <br /> <br />
      </p>
      <p class="paragraph-md">
          euismod nulla a, ullamcorper felis. Praesent consequat libero id enim consequat, non sollicitudin odio rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; <br /> <br />
          Maecenas quis dui vitae enim bibendum interdum sed in nunc. Duis ut erat dapibus, accumsan elit vitae, mollis quam. Praesent eget imperdiet sapien.
      </p>
    </article>
</template>

<script></script>

<style>

article {
  display: grid;
  gap: 4vw;
  margin: 0 auto;
}
@media (min-width: 800px) {
    article:has(> p:nth-child(2)) {
      grid-template-columns: repeat(2, 1fr);
    }
}

</style>