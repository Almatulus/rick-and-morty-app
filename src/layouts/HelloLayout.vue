<template>
    <div class="hello-layout">
        <v-container>
            <div class="hello-layout__inner d-flex align-center" >
                <v-row class="align-center">
                    <v-col cols="6" class="d-flex flex-column align-center">
                        <v-row>
                            <v-col>
                                <v-img 
                                src="../assets/images/logo.svg"
                                width="400"
                                height="100"
                                class="animated-logo">

                                </v-img>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <router-view/>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="6">
                        <v-img 
                        src="../assets/images/HighlightImage.png"
                        >
                        </v-img>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>


<style lang="scss" scoped>
.hello-layout {
    background: #000;
    // background-image: url('../assets/images/HighlightImage.png');
    // background-repeat: no-repeat;
    
    height: 100%;
	&__inner {
        height: 100%;
	}
    .container{
        height: 100%;
    }
}

.animated-logo{
    position: relative; /* устанавливаем позиционирование элемента */
    top: 0; /* начальное положение элемента по вертикали */
    animation: moveUpDown 1s ease-in-out infinite alternate;         
}

@keyframes moveUpDown {
  from {
    transform: translateY(0); /* начальное положение */
  }
  to {
    transform: translateY(-15px); /* конечное положение */
  }
}

</style>