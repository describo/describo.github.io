<template>
    <div class="flex flex-col md:flex-row place-content-between border-t border-slate-400">
        <div class="flex flex-col items-center md:items-start w-96">
            <LinkComponent link="/" target="">
                <img src="/images/logos/describo-logo.webp" class="h-16 lg:h-24" />
            </LinkComponent>
        </div>
        <div class="flex flex-col md:flex-row place-content-evenly">
            <div class="flex flex-col md:w-48">
                <LinkComponent link="/desktop" text="Desktop" target="" />
                <LinkComponent link="/online" text="Web" target="" />
                <LinkComponent link="/docs/component/introduction" text="Component" target="" />
                <LinkComponent link="/docs/profiles/introduction" text="Profiles" target="" />
                <LinkComponent link="/datapacks" text="Data Packs" target="" />
            </div>
            <div class="flex flex-col md:w-60">
                <!-- <LinkComponent link="/about" text="About" target="" /> -->
                <LinkComponent link="/terms-and-conditions" text="Terms & Conditions" target="" />
                <LinkComponent link="/privacy-policy" text="Privacy Policy" target="" />
            </div>
        </div>
    </div>
</template>
