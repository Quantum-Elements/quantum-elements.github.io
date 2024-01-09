<script src="./CanvasView.ts"/>

<template>
  <section class="canvas">
    <div class="qudit-list">
      <div v-for="(qudit, index) in qudits" :key="index" @click="setSelectedQudit(qudit)" class="qudit" :class="qudit === selectedQudit ? 'active' : ''"><span>q</span> {{ index + 1 }}</div>
    </div>
    <div class="coupling-list">
      <div v-for="(coupling, index) in couplings" :key="index" @click="setSelectedCoupling(coupling)" class="coupling" :class="coupling === selectedCoupling ? 'active' : ''"><span>0</span></div>
    </div>
  </section>
</template>
