import { DependencyContainer } from "@spt/models/external/tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { CustomItemService } from "@spt/services/mod/CustomItemService";
import { NewItemFromCloneDetails } from "@spt/models/spt/mod/NewItemDetails";
import { IPostSptLoadMod } from "@spt/models/external/IPostSptLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";

import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

class ArcaLive_ReTeX implements IPostDBLoadMod, IPostSptLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const CustomItem = container.resolve<CustomItemService>("CustomItemService");

        const itemsToClone: NewItemFromCloneDetails[] = [
            { // Black PM II 1-8x24 30mm scope
                itemTplToClone: "617151c1d92c473c770214ab",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "GoLani_1-8X24_BLK/scope_30mm_s&b_pm_ii_1_8x24.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818ae44bdc2dde698b456c",
                newId: "6707cf93169763456495def1",
                fleaPriceRoubles: 65000,
                handbookPriceRoubles: 50500,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "Schmidt & Bender PM II 1-8x24 30mm riflescope [Black]",
                        shortName: "PM II 1-8x24",
                        description: "The Schmidt & Bender PM II 1-8x24 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy. Painted with Black kit."
                    }
                }
            },
            { // Black PM II 3-12x50 34mm scope
                itemTplToClone: "61714eec290d254f5e6b2ffc",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "GoLani_3-12X50_BLK/scope_34mm_s&b_pm_ii_3_12x50.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818ae44bdc2dde698b456c",
                newId: "66e58ae2b4bfa9b7e658fe75",
                fleaPriceRoubles: 70000,
                handbookPriceRoubles: 65000,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "Schmidt & Bender PM II 3-12x50 34mm riflescope [Black]",
                        shortName: "PM II 3-12x50",
                        description: "The Schmidt & Bender PM II 3-12x50 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy. Painted with Black kit."
                    }
                }
            },
            { // Black & White PM II 3-12x50 34mm scope
                itemTplToClone: "61714eec290d254f5e6b2ffc",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "MrGang_34mmScope/scope_34mm_s&b_pm_ii_3_12x50.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818ae44bdc2dde698b456c",
                newId: "66e58dea4e3b14e4886a314d",
                fleaPriceRoubles: 70000,
                handbookPriceRoubles: 65000,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "Schmidt & Bender PM II 3-12x50 34mm riflescope [Black and White]",
                        shortName: "PM II 3-12x50",
                        description: "The Schmidt & Bender PM II 3-12x50 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy. Painted with Black and White kit."
                    }
                }
            },
            { // Black & White PM II 5-25x56 34mm scope
                itemTplToClone: "62850c28da09541f43158cca",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "MrGang_34mmScope/scope_34mm_s&b_pm_ii_5_25x56.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818ae44bdc2dde698b456c",
                newId: "66e590160c7c101cf864cfb6",
                fleaPriceRoubles: 90000,
                handbookPriceRoubles: 95000,
                handbookParentId: "5b5f748386f774093e6cb501",
                locales: {
                    en: {
                        name: "Schmidt & Bender PM II 5-25x56 34mm riflescope [Black and White]",
                        shortName: "PM II 5-25x56",
                        description: "The Schmidt & Bender PM II 5-25x56 riflescope was originally created for elite military forces for high-quality target acquisition and pinpoint accuracy. Painted with Black and White kit."
                    }
                }
            },
            { // FDE Boss Xe reflex sight
                itemTplToClone: "655f13e0a246670fb0373245",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "GoLani_BossXe_FDE/scope_all_wilcox_boss_xe_hp.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818ad54bdc2ddc698b4569",
                newId: "66eaaad000debc4b298f20dc",
                fleaPriceRoubles: 75000,
                handbookPriceRoubles: 31501,
                handbookParentId: "5b5f742686f774093e6cb4ff",
                locales: {
                    en: {
                        name: "Wilcox BOSS Xe reflex sight [FDE]",
                        shortName: "BOSS Xe",
                        description: "The Ballistically Optimized Sighting System reflex sight that combines the functions of a red dot, tactical block and iron sights. Manufactured by Wilcox. Painted with FDE kit."
                    }
                }
            },
            { // FDE CQR foregrip
                itemTplToClone: "5a7dbfc1159bd40016548fde",
                overrideProperties: {
                    ExaminedByDefault: true,
                    Prefab: {
                        path: "GoLani_CQR_FDE/foregrip_all_hera_arms_cqr_grip.bundle",
                        rcid: ""
                    }
                },
                parentId: "55818af64bdc2d5b648b4570",
                newId: "66e57bd29c304fe61b1c9c4a",
                fleaPriceRoubles: 39000,
                handbookPriceRoubles: 20961,
                handbookParentId: "5b5f71de86f774093f2ecf13",
                locales: {
                    en: {
                        name: "Hera Arms CQR tactical foregrip [FDE]",
                        shortName: "CQR",
                        description: "The CQR front grip is an easy to install, lightweight, and compact frontgrip, manufactured by Hera Arms. In combination with the CQR Buttstock, operators will get a lightweight and ergonomic SBR system. Painted with FDE kit."
                    }
                }
            }
        ];

        for (const cloneItem of itemsToClone)
        {
            CustomItem.createItemFromClone(cloneItem);
        }

        const assortTbl = {
            "5c0647fdd443bc2504c2d371": [ // Jaeger
                {
                    "items": [
                        {
                            "_id": "6707d4b22042d52e0dcf6d3c",
                            "_tpl": "6707cf93169763456495def1",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6707d9e3264938646fb1576d",
                            "_tpl": "66e58ae2b4bfa9b7e658fe75",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6707da7227c07e94c6e3a814",
                            "_tpl": "66e58dea4e3b14e4886a314d",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        },
                        {
                            "_id": "6707db2b024034396d889c02",
                            "_tpl": "66e590160c7c101cf864cfb6",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "6707d4b22042d52e0dcf6d3c": [
                            [
                                {
                                    "count": 57000,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6707d9e3264938646fb1576d": [
                            [
                                {
                                    "count": 68250,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6707da7227c07e94c6e3a814": [
                            [
                                {
                                    "count": 68250,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ],
                        "6707db2b024034396d889c02": [
                            [
                                {
                                    "count": 99750,
                                    "_tpl": "5449016a4bdc2d6f028b456f"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "6707d4b22042d52e0dcf6d3c": 4,
                        "6707d9e3264938646fb1576d": 4,
                        "6707da7227c07e94c6e3a814": 4,
                        "6707db2b024034396d889c02": 4
                    }
                }
            ],
            "5935c25fb3acc3127c3d8cd9": [ // Peacekeeper
                {
                    "items": [
                        {
                            "_id": "6707dc0ccac74651692bef8a",
                            "_tpl": "66eaaad000debc4b298f20dc",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "6707dc0ccac74651692bef8a": [
                            [
                                {
                                    "count": 484,
                                    "_tpl": "5696686a4bdc2da3298b456a"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "6707dc0ccac74651692bef8a": 4
                    }
                }
            ],
            "5a7c2eca46aef81a7ca2145d": [ // Mechanic
                {
                    "items": [
                        {
                            "_id": "67088d697e60e9f387ecfbd5",
                            "_tpl": "66e57bd29c304fe61b1c9c4a",
                            "parentId": "hideout",
                            "slotId": "hideout",
                            "upd": {
                                "UnlimitedCount": true,
                                "StackObjectsCount": 99999
                            }
                        }
                    ],
                    "barter_scheme": {
                        "67088d697e60e9f387ecfbd5": [
                            [
                                {
                                    "count": 174,
                                    "_tpl": "569668774bdc2da2298b4568"
                                }
                            ]
                        ]
                    },
                    "loyal_level_items": {
                        "67088d697e60e9f387ecfbd5": 4
                    }
                }
            ]
        }

        const db = container.resolve<DatabaseServer>("DatabaseServer").getTables();

        for (const trader in assortTbl)
        {
            assortTbl[trader].forEach(obj => {
                for (const item in obj.items)
                {
                    db.traders[trader].assort.items.push(obj.items[item]);
                }

                for (const item in obj.barter_scheme)
                {
                    db.traders[trader].assort.barter_scheme[item] = obj.barter_scheme[item];
                }

                for (const item in obj.loyal_level_items)
                {
                    db.traders[trader].assort.loyal_level_items[item] = obj.loyal_level_items[item];
                }
            });
        }

        const itemHelper: ItemHelper = container.resolve<ItemHelper>("ItemHelper");

        const items = Object.values(db.templates.items);

        const scope_mounts = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MOUNT));
        const receivers = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.RECEIVER));

        const ars = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.ASSAULT_RIFLE));
        const carbines = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.ASSAULT_CARBINE));
        const mgs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MACHINE_GUN));
        const srs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SNIPER_RIFLE));
        const mrs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.MARKSMAN_RIFLE));
        const pistols = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.PISTOL));
        const smgs = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SMG));
        const shotguns = items.filter(x => itemHelper.isOfBaseclass(x._id, BaseClasses.SHOTGUN));

        for (const mount of scope_mounts)
        {
            for (const slot in mount._props.Slots)
            {
                for (const scope of mount._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "617151c1d92c473c770214ab")
                    {
                        mount._props.Slots[slot]._props.filters[0].Filter.push("6707cf93169763456495def1");
                    }

                    if (scope === "61714eec290d254f5e6b2ffc")
                    {
                        mount._props.Slots[slot]._props.filters[0].Filter.push("66e58ae2b4bfa9b7e658fe75");
                        mount._props.Slots[slot]._props.filters[0].Filter.push("66e58dea4e3b14e4886a314d");
                    }

                    if (scope === "62850c28da09541f43158cca")
                    {
                        mount._props.Slots[slot]._props.filters[0].Filter.push("66e590160c7c101cf864cfb6");
                    }

                    if (scope === "655f13e0a246670fb0373245")
                    {
                        mount._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }

                    if (scope === "5a7dbfc1159bd40016548fde")
                    {
                        mount._props.Slots[slot]._props.filters[0].Filter.push("66e57bd29c304fe61b1c9c4a");
                    }
                }
            }
        }

        for (const receiver of receivers)
        {
            for (const slot in receiver._props.Slots)
            {
                for (const scope of receiver._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        receiver._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const ar of ars)
        {
            for (const slot in ar._props.Slots)
            {
                for (const scope of ar._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        ar._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const carbine of carbines)
        {
            for (const slot in carbine._props.Slots)
            {
                for (const scope of carbine._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        carbine._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const mg of mgs)
        {
            for (const slot in mg._props.Slots)
            {
                for (const scope of mg._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        mg._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const sr of srs)
        {
            for (const slot in sr._props.Slots)
            {
                for (const scope of sr._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        sr._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const mr of mrs)
        {
            for (const slot in mr._props.Slots)
            {
                for (const scope of mr._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        mr._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const pistol of pistols)
        {
            for (const slot in pistol._props.Slots)
            {
                for (const scope of pistol._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        pistol._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const smg of smgs)
        {
            for (const slot in smg._props.Slots)
            {
                for (const scope of smg._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        smg._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }

        for (const shotgun of shotguns)
        {
            for (const slot in shotgun._props.Slots)
            {
                for (const scope of shotgun._props.Slots[slot]._props.filters[0].Filter)
                {
                    if (scope === "655f13e0a246670fb0373245")
                    {
                        shotgun._props.Slots[slot]._props.filters[0].Filter.push("66eaaad000debc4b298f20dc");
                    }
                }
            }
        }
    }
}

module.exports = { mod: new ArcaLive_ReTeX() }