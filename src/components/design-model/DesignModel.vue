<script src="./DesignModel.ts"/>
<template>
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
          <span class="headline">Build Schematic</span>
          <button>Predefine Schematic</button>
          <button @click="insertQudit()">Insert qudit</button>
          <button @click="insertCoupling()">Insert coupling</button>
        </ul>

        <ul class="nav-workflow">
          <span class="headline">Specify System</span>
          <button>Qudit frequencies</button>
          <button>Coupling constants</button>
        </ul>

        <ul class="nav-workflow">
          <span class="headline">Specify Readout & Initialization</span>
          <button @click="setDesignModelStep('READOUT_PARAMETERS')">
            Readout parameters
          </button>
          <button @click="setDesignModelStep('INITIALIZATION_PARAMETERS')">
            Initialization parameters
          </button>
        </ul>

        <ul class="nav-workflow">
          <span class="headline">Specify Bath</span>
          <button @click="setDesignModelStep('BATH_TYPE')">Bath type</button>
          <button @click="setDesignModelStep('BATH_PARAMETERS')">
            Bath parameters
          </button>
          <button @click="setDesignModelStep('SYSTEM_BATH_COUPLING')">
            System-bath coupling
          </button>
        </ul>
      </div>
    </div>
  </aside>

  <CanvasView />

  <!-- Qudit  -->
  <aside class="right card rounded-0" v-if="selectedQudit">
    <div
      class="card-header d-flex justify-content-between"
      style="padding-top: 1rem; padding-bottom: 1rem"
    >
      <h4 class="card-title d-flex align-items-center">Qudit</h4>
      <button class="btn">Delete Qudit</button>
    </div>
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <div class="d-flex-gap align-items-center">
          <div class="form-group d-flex flex-column">
            <label class="form-label">Frequency</label>
            <input
              type="number"
              class="form-control"
              style="max-width: 6rem"
              :value="selectedQudit.frequency"
            />
          </div>
          <div style="font-size: 20px">&#xB1;</div>
          <div class="form-group d-flex flex-column">
            <label class="form-label">Variation</label>
            <div class="d-flex-gap align-items-center">
              <input
                type="number"
                class="form-control"
                style="max-width: 6rem"
                :value="selectedQudit.variation"
              />GHz
            </div>
          </div>
        </div>

        <img src="@/assets/qudit-energy-levels-3.svg" style="max-width: 80%" />

        <div class="form-group d-flex flex-column justify-content-start">
          <label class="form-label">Anharmonicity</label>
          <div class="d-flex-gap align-items-center">
            <input
              type="number"
              class="form-control"
              :value="selectedQudit.anharmonicity"
            />GHz
          </div>
        </div>
      </div>
    </div>
  </aside>
  <!-- Selected Coupling  -->

  <aside class="right card rounded-0" v-if="selectedCoupling">
    <div class="card-body">
      <div class="bg-dark p-4 border-radius">
        <div class="form-group flex-column">
          <label for="control-knob" class="form-label">Control Knob</label>
          <select class="form-select w-100" aria-label="control-knob">
            <option value="1" selected>No</option>
            <option value="2">Yes</option>
          </select>
        </div>

        <div class="d-flex-gap align-items-center">
          <div class="form-group d-flex flex-column">
            <label class="form-label">Frequency</label>
            <input
              type="number"
              class="form-control"
              style="max-width: 6rem"
              :value="selectedCoupling.frequency"
            />
          </div>
          <div style="font-size: 20px">&#xB1;</div>
          <div class="form-group d-flex flex-column">
            <label class="form-label">Variation</label>
            <div class="d-flex-gap align-items-center">
              <input
                type="number"
                class="form-control"
                style="max-width: 6rem"
                :value="selectedCoupling.variation"
              />GHz
            </div>
          </div>
        </div>
        <div class="p-4">
          <img src="@/assets/energy-levels.svg" alt="" />
        </div>

        <button class="btn w-100" @click="insertConstant()">Insert</button>

        <div
          v-for="(constant, index) in selectedCoupling.constants"
          class="constant"
          :key="index"
        >
          <span class="mb-2"
            >H<sub>15</sub> =0.01 | 10
            <img src="@/assets/icon-insert-constant.svg" alt="" /> 01 |</span
          >
        </div>
      </div>
    </div>
  </aside>

  <!-- Readout parameters  -->
  <aside
    class="card rounded-0 card right"
    v-if="designModelStep === 'READOUT_PARAMETERS'"
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
        <div class="form-group d-flex align-items-center">
          <label for="" class="form-label me-3" style="white-space: nowrap"
            >Fr <sub>0</sub></label
          >
          <input type="text" class="form-control" value="99.85%" />
        </div>
        <div class="form-group d-flex align-items-center">
          <label for="" class="form-label me-3" style="white-space: nowrap"
            >Fr <sub>1</sub></label
          >
          <input type="text" class="form-control" value="99.92%" />
        </div>
        <div class="form-group d-flex align-items-center">
          <label for="" class="form-label me-3" style="white-space: nowrap"
            >Fr <sub>2</sub></label
          >
          <input type="text" class="form-control" value="-----" />
        </div>
        <div class="form-group d-flex align-items-center">
          <label for="" class="form-label me-3" style="white-space: nowrap"
            >T <sup>R</sup></label
          >
          <input type="text" class="form-control" value="0.31us" />
        </div>
        <img src="@/assets/readout-parameters.svg" alt="" />
      </div>
    </div>
  </aside>

  <!-- Initialization parameters  -->
  <aside
    class="card rounded-0 card right"
    v-if="designModelStep === 'INITIALIZATION_PARAMETERS'"
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
          <label for="" class="form-label">Initialization fidelity</label>
          <input type="text" class="form-control" value="98.15%" />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" class="d-flex"
            ><div style="white-space: nowrap">| 2 ></div></label
          >
          <img src="@/assets/level-horizontal.svg" alt="" class="img-100" />
          <input
            type="text"
            class="form-control me-3"
            value="0.0"
            style="width: 2rem"
          />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" class="d-flex"
            ><div style="white-space: nowrap">| 1 ></div></label
          >
          <img src="@/assets/level-horizontal.svg" alt="" class="img-100" />
          <input
            type="text"
            class="form-control me-3"
            value="1.0"
            style="width: 2rem"
          />
        </div>
        <div class="form-group d-flex-gap align-items-center">
          <label for="" class="d-flex"
            ><div style="white-space: nowrap">| 0 ></div></label
          >
          <img src="@/assets/level-horizontal.svg" alt="" class="img-100" />
          <input
            type="text"
            class="form-control me-3"
            value="0.0"
            style="width: 2rem"
          />
        </div>
      </div>
    </div>
  </aside>

  <!-- BATh TYPE -->
  <div class="modal-backdrop" v-if="designModelStep === 'BATH_TYPE'">
    <div class="modal-content">
      <h4>BAth Type</h4>
      <div class="form-group">
        <input type="checkbox" id="ohmic" name="ohmic" checked />
        <label for="ohmic">Ohmic</label>
      </div>
      <div class="form-group">
        <input type="checkbox" id="spin-fluctuator" name="spin-fluctuator" />
        <label for="spin-fluctuator">Spin-fluctuator</label>
      </div>
      <button class="btn" @click="setDesignModelStep('BATH_PARAMETERS')">
        Continue
      </button>
    </div>
  </div>

  <!-- BATH PARAMETERS  -->
  <aside
    class="card rounded-0 card right"
    v-if="designModelStep === 'BATH_PARAMETERS'"
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
        <h4>Ohmic Bath</h4>
        <div class="form-group">
          <label for="" class="form-label">Bath</label>
          <input type="text" class="form-control" value="Bx" />
        </div>
        <div class="form-group">
          <label for="" class="form-label">Temperature</label>
          <div class="d-flex-gap align-items-center">
            <span class="me-3">T</span>
            <input type="text" class="form-control" value="16mK" />
          </div>
        </div>
        <div class="form-group">
          <label for="" class="form-label">Cutoff frequency</label>
          <div
            class="d-flex-gap align-items-center"
            style="white-space: nowrap"
          >
            <span class="me-3">W <sub>c</sub></span>
            <input type="text" class="form-control" value="0.1GHz" />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
