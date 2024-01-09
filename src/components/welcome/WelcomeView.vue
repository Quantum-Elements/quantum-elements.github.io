<script src="./WelcomeView.ts"/>

<template>
  <div class="dashboard-navs">
    <nav class="dashboard-navs-main d-flex justify-content-center">
      <img src="@/assets/logo_qe_white1.svg" alt="Quantum Elements Logo" class="logo">
    </nav>
  </div>
  <!-- WELCOME  -->
  <main class="p-5 d-flex">
        <!-- <div class="card" style="max-width:20rem;margin-right: 2rem">
          <div class="card-header">
            <h4 class="card-title d-flex align-items-center"><img src="@/assets/icon-chat.svg" alt="icon-chat" class="me-2"> QE CHAT</h4>
          </div>
          <div class="card-body">
            <button class="btn text-start bg-dark border border-radius p-4 mb-4">
              <img src="@/assets/icon-search.svg" alt="">
              What do I need to specify in qubit parameters?
            </button>
            <div class="bg-dark border border-radius p-4">
              <p>In ‘Qudit Coefficients’, the mean value and variance of the prescribed operator basis must be specified for
              each of the qubits.</p>
            <p>For example, in the Pauli group basis, the mean value of the coefficient preceding each of the Pauli
              operators of qubits is specified. Thereafter, any variation in the coefficient values due to manufacturing
              defects or material defects can be specified as well. Finally, upper and lower constraints of the.</p>
            </div>
          </div>
        </div> -->
        <div class="card w-100">
          <div class="card-header">
            <h4 class="card-title">Device Prescription</h4>
          </div>
          <div class="card-body">
            <div style="width:70%;margin: auto">
              <div class="form-group d-flex align-items-center">
                <label for="Quantum device">Quantum Device</label>
                <div class="nav-tabs form-group w-100 ">
                  <button class="nav-tab active">Quantum Computing</button>
                  <button class="nav-tab">Quantum Sensing</button>
                  <button class="nav-tab">Quantum Communication</button>
                </div>
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="Quantum device">Device Architecture</label>
                <select class="form-select w-100" aria-label="Default select example">
                  <option value="1" selected>Superconducting - transmon qubit</option>
                  <option value="2" >Transmon qubit</option>
                  <option value="3">Superconducting - Xmon qubit</option>
                  <option value="4">Superconducting - Phase qubit</option>
                  <option value="5">Superconducting - fluxonium qubit</option>
                </select>
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="Quantum device">Basis Type</label>
                <select class="form-select w-100" aria-label="Default select example">
                  <option value="1" selected>Harmonic oscillator</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="Quantum device">Number of energy levels</label>
                <input type="number" name="" id="" class="form-control w-100" value="3" min="2" max="3">
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="Quantum device">System Characterization</label>
                <select class="form-select w-100" aria-label="Default select example">
                  <option value="1" selected>Automatic</option>
                  <option value="2">Upload Data</option>
                </select>
              </div>

              <div class="d-flex justify-content-end mb-5">
                <button class="btn" @click="setAppView('DASHBOARD')">Continue</button>
              </div>
            </div>
          </div>

        </div>
    </main>
</template>
<style scoped lang="scss">
  label {width: 16rem; margin-right: 1rem}
</style>
