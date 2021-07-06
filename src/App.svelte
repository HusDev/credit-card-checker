<script>
  import { isValid, getCreditType } from "./helpers.js";
  let valid = false;
  let type = "INVALID";
  let value = "";

  const inputHandler = (creditNumber) => {
    type = getCreditType(creditNumber);
    if (type === "INVALID") {
      valid = false;
    } else {
      valid = isValid(creditNumber);
    }
  };
</script>

<div class="wrapper">
  <div style="border: solid 2px {valid ? '#36d436' : 'red'}" class="card">
    {#if type !== "INVALID" || type !== ""}
      <img src="img/{type}.png" alt="" />
    {/if}
    <div class="input">
      <label for="credit">Credit Card Number</label>
      <input
        bind:value
        name="credit"
        type="text"
        on:input={() => inputHandler(value)}
      />
    </div>
  </div>
</div>

<style>
  .wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 500px;
    height: 300px;
    background: rgb(83, 47, 113);
    background: linear-gradient(
      357deg,
      rgba(83, 47, 113, 1) 0%,
      rgba(11, 133, 208, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 10px;
    box-shadow: 3px 3px 5px rgb(189, 189, 189);
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    position: relative;
  }

  img {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 100px;
  }

  .input {
    width: 100%;
    margin: 20px;
  }

  input {
    width: 100%;
  }

  label {
    margin: 10px 0;
    color: white;
  }
</style>
