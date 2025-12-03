let audioPlaying = false;

// Play / Pause musik
function playMusic() {
    let audio = document.getElementById("bgMusic");
    if (!audioPlaying) audio.play();
    else audio.pause();

    audioPlaying = !audioPlaying;
}

// Hentikan musik
function stopMusic() {
    let audio = document.getElementById("bgMusic");
    audio.pause();
    audioPlaying = false;
}

// SweetAlert Template
const swals = Swal.mixin({
    confirmButtonColor: "#4A90E2",
    cancelButtonColor: "#d33",
});

// === MULAI (VERSI YANG KAMU MINTA) ===
async function mulai() {

    await swals.fire(
        "Halo!",
        "Apa kabar? Sebenarnya sa mau ba buat prank bgitu, tapi te jadi karna tatap nga tau. Ya karena ini hari yang spesial untuk ngana",
        "question"
    );

    await swals.fire(
        "Pasti ngna tau sape maksud disini buat apa. Saya cuman mau ucapin sesuatu sama ngna"
    );

    var { value: nama } = await swals.fire({
        title: "Tapi tulis dulu ngpe nama",
        input: "text",
    });

    if (!nama) {
        stopMusic();
        return;
    }

    // Masukkan nama ke tampilan HTML
    document.getElementById("nameTarget").textContent = nama;

    var { isConfirmed: sayang } = await swals.fire({
        title: `${nama} Hari ini ngna ulang tahun kan?`,
        confirmButtonText: "Iya",
        cancelButtonText: "Ngak",
        showCancelButton: true,
    });

    await swals.fire("Anjayy.. makin streess ini hehe. Semoga saja tida yaa");

    if (!sayang) {
        stopMusic();
        return;
    }

    var { value: persen } = await swals.fire({
        title: "Ulang tahun yang ke berapa ini?",
        icon: "question",
        input: "range",
        inputAttributes: {
            min: 20,
            max: 30,
        },
        inputValue: 20,
    });

    if (!persen) {
        stopMusic();
        return;
    }

    await swals.fire(
        `Selamat Ulang Tahun yoow.. Semoga di umur yang ke ${persen} ini, Ngape hari-hari selalu di selipkan rasa bahagia, yaa kalo tidak ada kayak yg pernah nga bilang "PAKSA" :) hehe`
    );

    var { isConfirmed: kangen } = await swals.fire({
        title:
            "Dan semoga apa yang didengar sama semesta tidak sungkan untuk dikabulkan",
        confirmButtonText: "Aamiin",
    });

    if (!kangen) {
        stopMusic();
        return;
    }

    await swals.fire(
        "Okee bangkali cuma itu yang sa mau bilang, hmm sehat selalu dan semoga selalu amann:)"
    );

    await swals.fire(`Oh iyoo ${nama} hampir lupaa`);

    await swals.fire("Coba ngna klik itu ikon puzzle yang dibawah itu");
}

// === TAMPIL UCAPAN AKHIR ===
function showFinalMessage() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("messageBox").style.display = "block";
    startConfetti();
}
