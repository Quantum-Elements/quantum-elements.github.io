<script src="./DashboardNavigation.ts"/>

<template>
  <div class="dashboard-navs">
      <nav class="dashboard-navs-main d-flex justify-content-start">
        <img src="@/assets/logo_qe_white1.svg" alt="Quantum Elements Logo" class="logo">

        <div class="btn-group" >
          <button @click="setDashboardTab('DESIGN_MODAL')" :class="dashboardTab === 'DESIGN_MODAL' ? 'active' : ''">Design Modal</button>
          <button @click="setDashboardTab('SIMULATE_MODEL')" :class="dashboardTab === 'SIMULATE_MODEL' ? 'active' : ''">Simulate model</button>
          <button @click="setDashboardTab('SIMULATE_CIRCUITS')" :class="dashboardTab === 'SIMULATE_CIRCUITS' ? 'active' : ''">Simulate circuits</button>
        </div>
      </nav>
    </div>
</template>
