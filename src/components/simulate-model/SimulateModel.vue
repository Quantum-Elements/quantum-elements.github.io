<script src="./SimulateModel.ts"/>
<template>
  <!-- DASHBOARD > SIMULATE MODEL -->
  <aside class="card rounded-0 left">
    <div class="card-header">
      <h4 class="card-title d-flex align-items-center">
        <img
          src="@/assets/icon-workflow.svg"
          alt="icon-workflow"
          class="me-2"
        />
        Workflow
      </h4>
    </div>
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <ul class="nav-workflow">
          <span class="headline">Gate Definition</span>
          <button @click="setSimulateModelStep('GATE_TYPES')">
            Gate Types
          </button>
          <button @click="setSimulateModelStep('GATE_PULSE')">
            Gate pulse
          </button>
        </ul>

        <ul class="nav-workflow">
          <span class="headline">Performance Metrics</span>
          <button>Metric Type</button>
        </ul>

        <ul class="nav-workflow">
          <!-- <span class="headline">Specify Readout & Initialization</span> -->
          <button @click="setSimulateModelStep('SIMULATE')">Simulate</button>
        </ul>
      </div>
    </div>
  </aside>

  <CanvasView />

  <!--Gate types  -->
  <aside
    class="card rounded-0 card right"
    v-if="simulateModelStep === 'GATE_TYPES'"
  >
    <div
      class="card-header d-flex justify-content-between"
      style="padding-top: 1rem; padding-bottom: 1rem"
    >
      <h4 class="card-title d-flex align-items-center">Qudit</h4>
      <button class="btn">Delete Qudit</button>
    </div>
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <div class="form-group">
          <label for="gate-types" class="form-label">Gate types</label>
          <select class="form-select w-100" aria-label="gate-types">
            <option value="1" selected>I</option>
          </select>
        </div>

        <div class="form-group d-flex-gap align-items-center">
          <label for="" style="white-space: nowrap" class="me-3">| 1 ></label>
          <img src="@/assets/gate-type-slider.svg" alt="" />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" style="white-space: nowrap" class="me-3">| 1 ></label>
          <img src="@/assets/gate-type-slider-x.svg" alt="" />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" style="white-space: nowrap" class="me-3">| 1 ></label>
          <img src="@/assets/gate-type-slider.svg" alt="" />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" style="white-space: nowrap" class="me-3">| 1 ></label>
          <img src="@/assets/gate-type-slider.svg" alt="" />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" style="white-space: nowrap" class="me-3">| 1 ></label>
          <img src="@/assets/gate-type-slider.svg" alt="" />
        </div>
      </div>
    </div>
  </aside>

  <!-- Gate Pulse  -->
  <aside
    class="card rounded-0 card right"
    v-if="simulateModelStep === 'GATE_PULSE'"
  >
    <div
      class="card-header d-flex justify-content-between"
      style="padding-top: 1rem; padding-bottom: 1rem"
    >
      <h4 class="card-title d-flex align-items-center">Qudit</h4>
      <button class="btn">Delete Qudit</button>
    </div>
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <div class="form-group">
          <label for="control-coefficients" class="form-label"
            >Control coefficients</label
          >
          <select class="form-select w-100" aria-label="control-coefficients">
            <option value="1" selected>W <sub>c</sub></option>
          </select>
        </div>
        <div class="form-group">
          <label for="additive-function" class="form-label"
            >Additive Function (mV)</label
          >
          <input
            type="text"
            value="f(t) = e -(t-3)2 /1.7"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="range" class="form-label">Range</label>
          <div class="d-flex-gap align-items-center">
            <input
              type="number"
              class="form-control"
              style="max-width: 6rem"
              value="0"
            />
            <div style="white-space: nowrap">≤ t ≤</div>
            <input
              type="number"
              class="form-control"
              style="max-width: 6rem"
              value="20"
            />
          </div>
        </div>

        <img src="@/assets/img-gate-pulse.svg" alt="" />
      </div>
    </div>
  </aside>

  <!-- Simulate  -->
  <aside
    class="card rounded-0 card right"
    v-if="simulateModelStep === 'SIMULATE'"
  >
    <div
      class="card-header d-flex justify-content-between"
      style="padding-top: 1rem; padding-bottom: 1rem"
    >
      <h4 class="card-title d-flex align-items-center">
        Time-dependent State Fidelity - qudit 1
      </h4>
    </div>
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <img
          src="@/assets/img-gate-fidelity-map-2.jpeg"
          alt=""
          style="width: 400px"
        />
      </div>
      <div class="bg-dark p-4 border-radius">
        <div class="text">X-Gate Fidelity: 98.75</div>
      </div>
    </div>
    <!-- <div class="card-header d-flex justify-content-between" style="padding-top: 1rem; padding-bottom: 1rem">
        <h4 class="card-title d-flex align-items-center">Gate Fidelity Map - CZ Gate</h4>
      </div>
      <div class="card-body">
        <div class="bg-dark p-4 border-radius">
          <img src="@/assets/img-gate-fidelity-map-2.svg" alt="">
        </div>
      </div> -->
  </aside>
</template>
