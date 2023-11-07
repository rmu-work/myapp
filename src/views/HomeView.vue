<template>
    <div>
        <div class="container-row">
            <div class="left-column">
                <div class="container">
                    <div>
                        <h3>Hi, Welcome..!</h3>

                        Login to you'r account.
                    </div>
                </div>
            </div>
            <div class="right-column">
                <div class="container">
                    <div>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn v-bind="attrs" v-on="on" class="col-5" color="info">Login</v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, index) in loginItems" :key="index" :value="index">
                                    <v-list-item-title style="cursor: pointer;" @click="clickAction(item)">
                                        <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>

                    <div class="mt-3">
                        <v-btn class="col-5" color="primary"
                            @click="$router.push({path: '/user/register/'})">Sign Up</v-btn>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: 'HomeView',

    data() {
        return {
            loginItems: [
                {
                    icon: 'mdi-google',
                    title: 'Login With Google'
                },
                {
                    icon: 'mdi-account-key',
                    title: 'Login With Password',
                    route: 'login/'
                },
            ]
        };
    },

    methods: {
        clickAction (data) {
            if (data.route) {
                this.$router.push({path: data.route});
            }
        }
    }
}
</script>

<style lang="scss">
.container-row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 0px;
    overflow: hidden;
    scrollbar-width: 1px;
}

.left-column {
    display: flex;
    width: 50%;
    background-color: darkblue;
    height: 100vh;
    color: white;
    justify-content: center;
    align-items: center;
}

.right-column {
    display: flex;
    width: 50%;
    height: 100vh;
    background-color: wheat;
    justify-content: center;
    align-items: center;
}
</style>
