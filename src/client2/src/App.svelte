<script>
  export let name;
</script>

<body class="p-2">
  <h1>"There's a great game coming"™</h1>
  <div class="lobby-actions mb-3">
    <a
      hidden
      id="joinButton"
      role="button"
      class="btn btn-primary m-2"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-trigger="focus"
      data-bs-placement="top"
      data-bs-content="Join link copied to clipboard"
      tabindex="0"
    >
      Share join link
    </a>

    <form>
      <label for="playerName" class="form-label">Your name</label>
      <input type="text" name="playerName" id="playerName" class="form-control" value={name} />
    </form>
  </div>
</body>

<style>
</style>
