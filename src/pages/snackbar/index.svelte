<script>
  import { Snackbar } from "svelteBricks";
  import Doc from "./index.md";

  setTimeout(() => {
    Prism.highlightAll();
  });
</script>



<Doc />

<Snackbar />

