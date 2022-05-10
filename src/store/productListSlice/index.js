import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
    name: "productList",
    initialState: {
        productList: [
            {
                "id": "rec43w3ipXvP28vog",
                "fields": {
                    "company": "ikea",
                    "colors": [
                        "#f15025",
                        "#222"
                    ],
                    "featured": true,
                    "price": 999,
                    "name": "high-back bench",
                    "image": [
                        {
                            "id": "attcvDDMikF6G2iNi",
                            "width": 1000,
                            "height": 639,
                            "url": "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=797cd8572a25d457",
                            "filename": "product-1.jpeg",
                            "size": 62864,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/c6c5c0d7a0b2abe7494acbcf112df4f1/14292088?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=8d4e36188117c7c8",
                                    "width": 56,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=841136172be9acad",
                                    "width": 801,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/1135c89c18e3edcdc125a8f94e462d6a/c8e40bb6?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=83efd4d142d16f23",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "rec4f2RIftFCb7aHh",
                "fields": {
                    "company": "marcos",
                    "colors": [
                        "#f15025",
                        "#222"
                    ],
                    "price": 7999,
                    "name": "albany table",
                    "image": [
                        {
                            "id": "attP2cUyxU35M1zbw",
                            "width": 1000,
                            "height": 1500,
                            "url": "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=f3a7277c1feda0cf",
                            "filename": "product-1.jpeg",
                            "size": 119274,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/ff352597ed0ea2977053a6ff046fce27/b6c7863a?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=a7e080bb8c9adc0f",
                                    "width": 24,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/ecc03714fd1ff14f50d98834615da483/30525671?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=d72b03df50d144b0",
                                    "width": 512,
                                    "height": 768
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/82c685d726bb3f9548b092b86dd91f94/a75cff2f?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=05acfdf916815e12",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "rec8kkCmSiMkbkiko",
                "fields": {
                    "company": "caressa",
                    "colors": [
                        "#222",
                        "#0000ff",
                        "#f15025"
                    ],
                    "price": 2599,
                    "name": "accent chair",
                    "image": [
                        {
                            "id": "attIieysyB9zQmQo9",
                            "width": 1000,
                            "height": 667,
                            "url": "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=ceee701c1a123306",
                            "filename": "product-4.jpeg",
                            "size": 49641,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/46d7757ffd7715c8d37dfdc385b1811b/7ce1b05a?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=2c17b14de82f1398",
                                    "width": 54,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/ececf357189e0a6506cdb45152271a5c/e0407792?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=2aed8e4f76df8392",
                                    "width": 768,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/b5624afff9ed1f1ba4fb89cb98f275fe/b7c161ca?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=2af176e98854abb9",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recBohCqQsot4Q4II",
                "fields": {
                    "company": "caressa",
                    "colors": [
                        "#ff0000",
                        "#0000ff"
                    ],
                    "price": 4599,
                    "name": "wooden table",
                    "image": [
                        {
                            "id": "attXaEED3KJcY2cjY",
                            "width": 1280,
                            "height": 1891,
                            "url": "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=dba8eb380fd43fd2",
                            "filename": "pexels-dominika-roseclay-1139785.jpg",
                            "size": 203105,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/9bc7153f82a3848d991a2909e8d5eaa2/142af858?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=eaa39b006b066a6d",
                                    "width": 24,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/13b8798ce604dab29656905f94461083/2fcbbbba?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=c93baba3db2be254",
                                    "width": 512,
                                    "height": 756
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/b056d11a9bed71cfcf2665fdd4769da4/ee57010b?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=9f38eaac53ac1715",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recDG1JRZnbpRHpoy",
                "fields": {
                    "company": "caressa",
                    "colors": [
                        "#ff0000",
                        "#f15025"
                    ],
                    "price": 699,
                    "name": "dining table",
                    "image": [
                        {
                            "id": "attxkKEEgmBnutpwI",
                            "width": 1280,
                            "height": 1858,
                            "url": "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=b7fec57737dc5ea0",
                            "filename": "product-8.jpg",
                            "size": 281908,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/a0fc4ea5bbdab58abdc6e947ede9c3b3/2f353051?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=ccac7dabeaf67c23",
                                    "width": 25,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/292e8c59ea4278c67509f457ed713c9e/dbcee29d?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=d92e188914a22088",
                                    "width": 512,
                                    "height": 743
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/c11c7a1253bb53833711e10f9416e0c4/643da34e?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=023becea2f889187",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recNWGyP7kjFhSqw3",
                "fields": {
                    "company": "liddy",
                    "colors": [
                        "#0000ff"
                    ],
                    "price": 6999,
                    "name": "sofa set",
                    "image": [
                        {
                            "id": "att5iyl4TJvd3oepN",
                            "width": 1000,
                            "height": 625,
                            "url": "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=2e74073252aa05bf",
                            "filename": "product-1.jpeg",
                            "size": 56151,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/5ad747d7d069d341549879918919709f/42ff30ea?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=d36915819ae2c4eb",
                                    "width": 58,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/7ebbffdd8e9a1b0a6ecabf8765a01a93/91111f2f?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=79bc9960e2b83ad9",
                                    "width": 819,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/3a6cbdd90a6fdc23a87620e972638bb6/a92bc534?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=04510043a2f0bcf2",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recZEougL5bbY4AEx",
                "fields": {
                    "company": "marcos",
                    "colors": [
                        "#00ff00",
                        "#f15025",
                        "#ff0000"
                    ],
                    "price": 899,
                    "name": "modern bookshelf",
                    "image": [
                        {
                            "id": "attDj1C6GxJMsJ1he",
                            "width": 1280,
                            "height": 720,
                            "url": "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=a287b7bbd0cb60ff",
                            "filename": "product-7.jpg",
                            "size": 162415,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/0782ecc8a715a4681d2c84065bc1ea3a/e890034c?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=c3d9f69163925db1",
                                    "width": 64,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/bd412f9b69724bf7cb63542c9d72cc19/70f9bf4a?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=bbbd6b3becb12eb5",
                                    "width": 910,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/c5c16b602d0780157504bd71421b3ff9/ea7425cd?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=ae914f79be2eb11b",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recjMK1jgTb2ld7sv",
                "fields": {
                    "company": "liddy",
                    "colors": [
                        "#f15025"
                    ],
                    "price": 2199,
                    "name": "emperor bed",
                    "image": [
                        {
                            "id": "attiwrd7gSI1oGxRK",
                            "width": 1280,
                            "height": 720,
                            "url": "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=253c6d55de9b04bc",
                            "filename": "product-6.jpg",
                            "size": 178908,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/fe79fac049f158bc511400d12c52e8ef/71546502?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=e5b870502852982e",
                                    "width": 64,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/a089f9304b965724c0e6828c96dd1a53/cf460909?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=67f4cb7e52812580",
                                    "width": 910,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/3c3122244e712a76e0dd7a951c035665/59fa83b1?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=3bb103b8d5e8d532",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recmg2a1ctaEJNZhu",
                "fields": {
                    "company": "marcos",
                    "colors": [
                        "#00ff00",
                        "#0000ff"
                    ],
                    "featured": true,
                    "price": 3995,
                    "name": "utopia sofa",
                    "image": [
                        {
                            "id": "attqutUt355traBeS",
                            "width": 1280,
                            "height": 846,
                            "url": "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=0f74b54fa66c8f2d",
                            "filename": "product-3.jpg",
                            "size": 196312,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/265f1ffc8dc0a2e807a36c1182f652d0/c40102f0?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=34f8f03f0c60beda",
                                    "width": 54,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/ee08b908ae61c8241f56130eedefac0a/22e0d8df?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=f948e77877949957",
                                    "width": 775,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/4e0590e23f0b58b4c42456f921ad7361/9e2b8527?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=d2df0f21e4733691",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recvKMNR3YFw0bEt3",
                "fields": {
                    "company": "liddy",
                    "colors": [
                        "#ff0000",
                        "#00ff00"
                    ],
                    "featured": true,
                    "price": 2998,
                    "name": "entertainment center",
                    "image": [
                        {
                            "id": "atttOzyYI8P1XfJu8",
                            "width": 1280,
                            "height": 924,
                            "url": "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=d927213e031e7bad",
                            "filename": "product-2.jpg",
                            "size": 195175,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/df32d98d412d0bdc2b3be9d66992e873/0d4edc49?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=59538314ceac0724",
                                    "width": 50,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/37c101731d977a9ff9c98530185b77e0/078958cd?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=8a90bae7a5860ac3",
                                    "width": 709,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/b360f712aca802235009988053b2c916/78daf7ad?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=cff08ccb077e8c84",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recxaXFy5IW539sgM",
                "fields": {
                    "company": "ikea",
                    "colors": [
                        "#00ff00",
                        "#ff0000"
                    ],
                    "price": 1099,
                    "name": "albany sectional",
                    "image": [
                        {
                            "id": "attjWNxk7KKzcLPDx",
                            "width": 1000,
                            "height": 652,
                            "url": "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=f345e285e59d1026",
                            "filename": "product-1.jpeg",
                            "size": 61946,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/8075106bba7121fd94105a52b8ab5109/83108f1e?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=5f509ab9326f510f",
                                    "width": 55,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/0f159a8ff208a1ca0683359d0bbcb204/dfa5455c?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=9434f7043a018a2a",
                                    "width": 785,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/c9d2b53f57f76a26f3d44f3916fc3ae8/4bad3919?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=f0faa9bddcbb156e",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            },
            {
                "id": "recyqtRglGNGtO4Q5",
                "fields": {
                    "company": "liddy",
                    "colors": [
                        "#222"
                    ],
                    "price": 999,
                    "name": "leather sofa",
                    "image": [
                        {
                            "id": "attnZHyyOUTBzJ1ZD",
                            "width": 1280,
                            "height": 960,
                            "url": "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=66b679fb819f9958",
                            "filename": "product-5.jpg",
                            "size": 189559,
                            "type": "image/jpeg",
                            "thumbnails": {
                                "small": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/e5684223c4670dbe29acc01ebb2e887d/0a6d6a94?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=64b94d97c0e4a332",
                                    "width": 48,
                                    "height": 36
                                },
                                "large": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/0a5ef48cda665e63b6417fefb9998fff/668e4a7e?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=dd8d089ac55bcae0",
                                    "width": 683,
                                    "height": 512
                                },
                                "full": {
                                    "url": "https://dl.airtable.com/.attachmentThumbnails/4dea7b09d714ee3fee6f79f92cdc51fb/39a2fa77?ts=1651692224&userId=usrQMwWEPx18KgLcP&cs=ca4d6d7fe05bf1b5",
                                    "width": 3000,
                                    "height": 3000
                                }
                            }
                        }
                    ]
                }
            }
        ],
        logoComply: [
            {
                name: "white",
                image: "https://vanilla-js-store.netlify.app/images/logo-white.svg"
            },
            {
                name: "black",
                image: "https://vanilla-js-store.netlify.app/images/logo-black.svg"
            },
        ],
        detailProduct: null,
        relatedProduct: [],
    },
    reducers: {
        getDetailProduct: (state, action) => {
            state.detailProduct = state.productList.find((product) => {
                return product.id === action.payload
            })
            const related = []
            state.productList.map((product) => {
                if(product.fields.company === state.detailProduct.fields.company){
                    related.push(product)
                }
            })
            state.relatedProduct = related
        },
        getRelatedProduct: (state, action) => {
            const related = []
            state.productList.map((product) => {
                if(product.fields.company === action.payload){
                    related.push(product)
                }
            })
            state.relatedProduct = related
        }
    }
})

export default productListSlice