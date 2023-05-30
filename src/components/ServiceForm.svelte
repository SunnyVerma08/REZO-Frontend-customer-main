<script>
    import { onMount, beforeUpdate } from 'svelte';
    import DownArrow from '../../static/img/icons/down-arrow.png';
    import { apiCall, appStore } from '../apiCallStore';
    import _ from 'lodash';

    let formStore = {
        brand: '',
        model: '',
        fuelType: ''
    }

    onMount(async () => {
        await apiCall('getBrands');
    })

    const handleChange = async (e) => {
        if('brand_id' === e.target.name){
            formStore = { ...formStore, brand: e.target.value, model: '', fuelType: '' },
            await apiCall('getModels', { brand: e.target.value });
        }

        if('model_id' === e.target.name){
            const [currentModel] = $appStore.models.filter(m => m._id === e.target.value);
            formStore = { ...formStore, fuelType: currentModel.model.fuel }
        }
    }
    
    $: brands = $appStore.brands;
    $: models = $appStore.models;
    
</script>

<form method='GET' action='/book'>
    <div class="grid grid-cols-6 gap-3">
        <div class="col-span-6">
            <div class="relative bg-gray-300 border border-gray-300 rounded">
                <div class="relative h-10 leading-5">
                    <label for='brand' class="absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">Brand</label>
                    <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                        <select id="brand_id" name="brand_id" class="border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none" bind:value={formStore.brand} on:change={handleChange} required>
                            <option selected value=''>Select Brand</option>
                            {#if !_.isEmpty(brands)}
                                {#each brands as { _id, name }}
                                 <option value={_id}>{name}</option>
                                {/each}
                            {/if}
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-6">
            <div class="relative bg-gray-300 border border-gray-300 rounded">
                <div class="relative h-10 leading-5">
                    <label for='model' class="absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">Model</label>
                    <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat  bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                        <select id="model_id" name="model_id" class="border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none" bind:value={formStore.model} on:change={handleChange} required>
                            <option selected value=''>Select Model</option>
                            {#if !_.isEmpty(models)}
                                {#each models as { model, _id }}
                                <option value={_id}>{model.name}</option>
                                {/each}
                            {/if}
                        </select>
                    </div>
                </div>
            </div>	
        </div>
        <div class="col-span-6">
            <div class="relative bg-gray-300 border border-gray-300 rounded">
                <div class="relative h-10 leading-5">
                    <label for='fuel_type' class="absolute w-16 pl-2 text-xs text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap leading-10">Fuel Type</label>
                    <div class="text-lg overflow-hidden whitespace-nowrap overflow-ellipsis leading-10 absolute left-16 right-2 bg-no-repeat bg-right" style={`background-image:url(${DownArrow}); background-size:28px 8px;`}>
                        <select id="fuel_type" name="fuel_type" class="border-0 outline-none pl-0 text-left relative top-auto left-auto bg-transparent h-full w-full appearance-none" bind:value={formStore.fuelType} required>
                            <option value="">Select Fuel Type</option>
                            <option value="petrol">Petrol</option>
                            <option value="electric">Electric</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-6">
            <button type="submit" class="bg-red-600 block w-full py-2 text-white rounded-2xl">Get Started</button>
        </div>
    </div>
</form>