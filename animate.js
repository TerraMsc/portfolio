const tl = gsap.timeline({defaults: {duration: 12}})

gsap.to('.mia', {duration: 2, text: "Mia Lipińska", ease: "power2.out"});

tl.to('.gradient-1', {opacity: 1})
tl.to('.gradient-2', {opacity: 1}, "<35%")
tl.to('.gradient-3', {opacity: 1}, "<35%")
tl.to('.gradient-4', {opacity: 1}, "<35%")
tl.to('.gradient-5', {opacity: 1}, "<35%")
tl.to('.gradient-6', {opacity: 1}, "<35%")
tl.to('.gradient-7', {opacity: 1}, "<35%")
tl.to('.gradient-8', {opacity: 1}, "<35%")
tl.to('.gradient-9', {opacity: 1}, "<35%")
tl.fromTo('.ind', {opacity: 1}, {duration: 0.4, opacity: 0,  repeat: 8, yoyo: true}, 1.8)
tl.to('.name', {x:40, duration: 0.5}, 5.5)

const indicator = gsap.timeline({defaults: {duration: 2}})

