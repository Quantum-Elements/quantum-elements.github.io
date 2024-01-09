<script lang="ts" src="./DashboardView"/>

<template>
  <div class="dashboard">

    <WelcomeView v-if="appView === 'WELCOME'"/>

    <div v-if="appView === 'DASHBOARD'" class="dashboard-main">
      <DashboardNavigation/>
      <div class="dashboard-main-content">
        <DesignModel v-if="dashboardTab === 'DESIGN_MODAL'" />
      <SimulateModel v-if="dashboardTab === 'SIMULATE_MODEL'" />
      </div>
    </div>

  </div>
</template>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="scss"/>
