<template>
    <b-container fluid class="profile-page">
        <b-row>
            <div class="profile-container">
                <div class="profile-image">
                    <!-- <img src="@/assets/info-logos/money.svg" alt=""> -->
                </div>
                <div class="profile-info">
                    <div class="profile-info-row">
                        <h4>Username: Testuser123</h4>
                    </div>
                    <div class="profile-info-row">
                        <h4>Email: test@test.com</h4>
                    </div>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'profile',
}
</script>

<style>
.profile-page{
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 92px);
}

.profile-container{
    background: white;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    width: 370px;
    max-width: 370px;
}

.profile-image{
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    border-radius: 50%;
    background-color: gray;
}

.profile-image img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.profile-info{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.profile-info-row{
    padding: 10px 0;
}
</style>