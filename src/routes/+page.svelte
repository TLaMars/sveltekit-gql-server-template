<script lang="ts">
  import type { HelloQuery } from "gql/generated/graphql";
  import helloQuery from "gql/queries/hello";
  import { query } from "svelte-apollo";

  const result = query<HelloQuery>(helloQuery);
</script>

<h1>Welcome to SvelteKit</h1>

{#if $result.loading}
  <p>Loading</p>
{:else}
  <p>{$result.data?.hello}</p>
{/if}

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
