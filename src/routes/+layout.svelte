<script lang="ts">
  import { setClient } from "svelte-apollo";
  import client from "services/apollo-client";

  setClient(client);
</script>

<slot />
