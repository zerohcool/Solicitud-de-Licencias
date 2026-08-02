// Lógica de Negocio y Control de la Aplicación Licencia de Manipulador

// Variables Globales
let dbFaenas = [];
let dbPrevencionistas = [];
let dbHistorial = [];


// Clases Globales para Datepickers
let pickerDob = null;
let pickerInduccion = null;
let pickerTramite = null;

// Mapa de conversión de regiones de Chile a números romanos
const REGION_ROMAN_MAP = {
  "arica": "XV",
  "tarapaca": "I",
  "antofagasta": "II",
  "atacama": "III",
  "coquimbo": "IV",
  "valparaiso": "V",
  "metropolitana": "RM",
  "o'higgins": "VI",
  "ohiggins": "VI",
  "maule": "VII",
  "nuble": "XVI",
  "biobio": "VIII",
  "araucania": "IX",
  "rios": "XIV",
  "lagos": "X",
  "aysen": "XI",
  "magallanes": "XII"
};

// Logotipo SVG de Enaex
const ENAEX_SVG_LOGO = `
<svg viewBox="0 0 160 40" width="160" height="40" xmlns="http://www.w3.org/2000/svg">
  <!-- Enaex Red Chevron symbol -->
  <polygon points="5,14 14,21 5,28 9,28 18,21 9,14" fill="#d91e36"/>
  <polygon points="12,14 21,21 12,28 16,28 25,21 16,14" fill="#d91e36"/>
  <!-- Text "Enaex" -->
  <text x="32" y="27" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="21" fill="#1e293b">Enaex</text>
  <!-- Text "Chile" -->
  <text x="46" y="37" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="bold" font-size="8.5" fill="#475569">Chile</text>
  <!-- Red chemical nodes connected by lines -->
  <line x1="120" y1="21" x2="132" y2="13" stroke="#d91e36" stroke-width="1.8"/>
  <line x1="120" y1="21" x2="132" y2="29" stroke="#d91e36" stroke-width="1.8"/>
  <line x1="132" y1="13" x2="132" y2="29" stroke="#d91e36" stroke-width="1.8"/>
  <circle cx="120" cy="21" r="4.5" fill="#d91e36"/>
  <circle cx="132" cy="13" r="3.5" fill="#d91e36"/>
  <circle cx="132" cy="29" r="3.5" fill="#d91e36"/>
</svg>
`;

// --- CUSTOM DATE PICKER COMPONENT CLASS ---
class CustomDatePicker {
  constructor(elementId, hiddenInputId, onSelectCallback) {
    this.container = document.getElementById(elementId);
    this.hiddenInput = document.getElementById(hiddenInputId);
    this.displayInput = this.container.querySelector('.datepicker-display');
    this.toggleBtn = this.container.querySelector('.datepicker-toggle-btn');
    this.popover = this.container.querySelector('.calendar-popover');
    this.titleSpan = this.container.querySelector('.calendar-title');
    this.prevBtn = this.container.querySelector('.prev-month');
    this.nextBtn = this.container.querySelector('.next-month');
    this.daysContainer = this.container.querySelector('.calendar-days');
    
    this.onSelect = onSelectCallback;
    
    // State
    this.currentDate = new Date(); 
    this.selectedDate = null;      
    
    this.initEvents();
  }
  
  initEvents() {
    const toggleHandler = (e) => {
      e.stopPropagation();
      this.togglePopover();
    };
    
    this.displayInput.addEventListener('click', toggleHandler);
    this.toggleBtn.addEventListener('click', toggleHandler);
    
    this.prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.changeMonth(-1);
    });
    
    this.nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.changeMonth(1);
    });
    
    this.popover.addEventListener('click', (e) => e.stopPropagation());
  }
  
  togglePopover() {
    const isActive = this.popover.classList.contains('active');
    
    document.querySelectorAll('.calendar-popover').forEach(pop => {
      pop.classList.remove('active');
    });
    
    if (!isActive) {
      this.popover.classList.add('active');
      this.render();
    }
  }
  
  changeMonth(delta) {
    let year = this.currentDate.getFullYear();
    let month = this.currentDate.getMonth() + delta;
    this.currentDate = new Date(year, month, 1);
    this.render();
  }
  
  setValue(isoString) {
    if (!isoString) {
      this.selectedDate = null;
      this.displayInput.value = '';
      this.hiddenInput.value = '';
      return;
    }
    
    const parts = isoString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const day = parseInt(parts[2]);
      
      this.selectedDate = new Date(year, month, day);
      this.currentDate = new Date(year, month, 1);
      
      const pad = (n) => n.toString().padStart(2, '0');
      this.displayInput.value = `${pad(day)}/${pad(month + 1)}/${year}`;
      this.hiddenInput.value = isoString;
      
      this.hiddenInput.dispatchEvent(new Event('change'));
    }
  }
  
  render() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    this.titleSpan.textContent = `${monthNames[month]} ${year}`;
    
    this.daysContainer.innerHTML = '';
    
    const firstDayIdx = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const totalDaysPrev = new Date(year, month, 0).getDate();
    
    for (let i = firstDayIdx - 1; i >= 0; i--) {
      const d = totalDaysPrev - i;
      const span = document.createElement('span');
      span.className = 'calendar-day prev-month';
      span.textContent = d;
      this.daysContainer.appendChild(span);
    }
    
    const today = new Date();
    for (let d = 1; d <= totalDays; d++) {
      const span = document.createElement('span');
      span.className = 'calendar-day';
      span.textContent = d;
      
      if (this.selectedDate && 
          this.selectedDate.getDate() === d && 
          this.selectedDate.getMonth() === month && 
          this.selectedDate.getFullYear() === year) {
        span.classList.add('selected');
      }
      
      if (today.getDate() === d && 
          today.getMonth() === month && 
          today.getFullYear() === year) {
        span.classList.add('today');
      }
      
      span.addEventListener('click', () => {
        this.selectDate(d);
      });
      
      this.daysContainer.appendChild(span);
    }
    
    const totalCellsUsed = firstDayIdx + totalDays;
    const remainingCells = 42 - totalCellsUsed;
    for (let d = 1; d <= remainingCells; d++) {
      const span = document.createElement('span');
      span.className = 'calendar-day next-month';
      span.textContent = d;
      this.daysContainer.appendChild(span);
    }
  }
  
  selectDate(day) {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.selectedDate = new Date(year, month, day);
    
    const pad = (n) => n.toString().padStart(2, '0');
    const isoString = `${year}-${pad(month + 1)}-${pad(day)}`;
    
    this.displayInput.value = `${pad(day)}/${pad(month + 1)}/${year}`;
    this.hiddenInput.value = isoString;
    
    this.popover.classList.remove('active');
    
    this.hiddenInput.dispatchEvent(new Event('change'));
    
    if (this.onSelect) {
      this.onSelect(isoString);
    }
  }
}

// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  setupEventListeners();
  initFormSelectors();
  updateHistorialUI();
  updateFaenasTable();
  updatePrevencionistasTable();
  initCertificateCounter();
  initCustomDatePickers();
  
  const todayStr = new Date().toISOString().split('T')[0];
  pickerTramite.setValue(todayStr);
  pickerInduccion.setValue(todayStr);
  
  renderPreviews();
});

function initLocalStorage() {
  const defaultFaenas = [
    {
      id: "faena-1",
      faena: "MINERA SIERRA GORDA SCM",
      direccionLaboral: "MINERA SIERRA GORDA SCM",
      comunaLaboral: "ANTOFAGASTA",
      empleador: "ENAEX SERVICIOS S.A.",
      rutEmpleador: "76.041.871-4",
      registroNacional: "COMERCIANTE DE EXPLOSIVOS",
      nRegistro: "70/007/00007",
      areaTrabajo: "Mina"
    }
  ];

  const defaultPrevencionistas = [
    {
      id: "prev-1",
      nombre: "HECTOR IVAN VARGAS GALINDO",
      rut: "10.095.773-6",
      titulo: "Ingeniero en Prevención de Riesgos",
      registroSNS: "AN/P-2945 , Resolucion n° 8878"
    },
    {
      id: "prev-2",
      nombre: "GONZALO ANDRES NAVARRETE VALLEJOS",
      rut: "16.345.678-9",
      titulo: "Ingeniero en Prevención de Riesgos",
      registroSNS: "AN/P-5432 , Resolucion n° 9021"
    }
  ];

  if (!localStorage.getItem('db_faenas')) {
    localStorage.setItem('db_faenas', jsonEncode(defaultFaenas));
  }
  if (!localStorage.getItem('db_prevencionistas')) {
    localStorage.setItem('db_prevencionistas', jsonEncode(defaultPrevencionistas));
  }
  if (!localStorage.getItem('db_historial')) {
    localStorage.setItem('db_historial', jsonEncode([]));
  }
  if (!localStorage.getItem('next_certificate_number')) {
    localStorage.setItem('next_certificate_number', '1');
  }

  dbFaenas = jsonDecode(localStorage.getItem('db_faenas'));
  dbPrevencionistas = jsonDecode(localStorage.getItem('db_prevencionistas'));
  dbHistorial = jsonDecode(localStorage.getItem('db_historial'));
}

function initCustomDatePickers() {
  pickerDob = new CustomDatePicker('datepicker-dob', 'trabajador_dob', () => {
    renderPreviews();
  });
  
  pickerInduccion = new CustomDatePicker('datepicker-induccion', 'fecha_induccion', () => {
    renderPreviews();
  });
  
  pickerTramite = new CustomDatePicker('datepicker-tramite', 'fecha_tramite', () => {
    renderPreviews();
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.calendar-popover').forEach(pop => {
      pop.classList.remove('active');
    });
  });
}

function initCertificateCounter() {
  const counterInput = document.getElementById('next_cert_counter');
  const certNumInput = document.getElementById('n_certificado_comandancia');
  
  const savedCounter = localStorage.getItem('next_certificate_number') || '1';
  counterInput.value = savedCounter;
  certNumInput.value = savedCounter;

  counterInput.addEventListener('change', () => {
    localStorage.setItem('next_certificate_number', counterInput.value);
    certNumInput.value = counterInput.value;
    renderPreviews();
  });

  certNumInput.addEventListener('input', () => {
    counterInput.value = certNumInput.value;
    localStorage.setItem('next_certificate_number', certNumInput.value);
    renderPreviews();
  });
}

function jsonEncode(obj) {
  return JSON.stringify(obj);
}
function jsonDecode(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
}

async function downloadPDFs() {
  console.log("Iniciando descarga de PDFs...");
  
  const data = getFormInputsData();
  const workerName = (data.trabajador.nombre || "Documento").replace(/\s+/g, '_');
  const workerRut = (data.trabajador.rut || "").replace(/[^0-9kK]/g, '');
  const tipos = data.tramite.tipos.length > 0 ? data.tramite.tipos : ["MANIPULADOR DE EXPLOSIVOS"];

  const downloadBtn = document.getElementById('btn-download-pdf');
  const originalText = downloadBtn.innerHTML;
  downloadBtn.innerHTML = '⏳ Generando...';
  downloadBtn.disabled = true;

  // Create loading overlay to cover the viewport
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.left = '0';
  overlay.style.top = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
  overlay.style.zIndex = '99999';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.color = '#ffffff';
  overlay.style.fontFamily = 'Arial, sans-serif';
  overlay.innerHTML = `
    <div style="font-size: 2.5rem; margin-bottom: 1rem; animation: spin 2s linear infinite;">⏳</div>
    <div style="font-size: 1.3rem; font-weight: bold; margin-bottom: 0.5rem;">Generando Documentos Oficiales</div>
    <div style="font-size: 0.95rem; color: #94a3b8;">Por favor espere, descargando PDFs...</div>
  `;
  document.body.appendChild(overlay);

  try {
    for (let i = 0; i < tipos.length; i++) {
      const tipo = tipos[i];
      const suffix = tipos.length > 1 ? `_${tipo.replace(/\s+/g, '_')}` : '';

      // Force render previews on screen first to ensure DOM is fully up to date
      renderPreviews();

      // 1. Generate Cartola (Oficio Horizontal: 330mm x 216mm)
      // We clone the actual preview element which is already fully styled and filled
      const previewCartola = document.getElementById('preview-cartola');
      if (!previewCartola) throw new Error("No se encontró el elemento preview-cartola");

      const cartolaContainer = document.createElement('div');
      // Place it in the normal flow below the viewport fold
      cartolaContainer.style.position = 'relative';
      cartolaContainer.style.width = '298mm'; // 330mm - 16mm * 2 (margins left/right with safety buffer)
      cartolaContainer.style.height = '186mm'; // 216mm - 15mm * 2 (margins top/bottom)
      cartolaContainer.style.backgroundColor = '#ffffff';
      cartolaContainer.style.color = '#000000';
      cartolaContainer.style.margin = '0';
      cartolaContainer.style.padding = '0'; // Remove padding to avoid clipping borders
      cartolaContainer.style.boxSizing = 'border-box';

      // Clone preview inner content to avoid cloning transformed wrapper class
      const cartolaClone = previewCartola.firstElementChild.cloneNode(true);
      // Strip preview scaling styles and apply clean document sizing
      cartolaClone.className = 'printable-document cartola-doc';
      cartolaClone.style.transform = 'none';
      cartolaClone.style.margin = '0';
      cartolaClone.style.width = '100%';
      cartolaClone.style.maxWidth = '100%';
      cartolaClone.style.height = '100%';
      cartolaClone.style.boxSizing = 'border-box';
      cartolaClone.style.display = 'flex';
      
      cartolaContainer.appendChild(cartolaClone);
      document.body.appendChild(cartolaContainer);

      // Wait for layout reflow and rendering
      await new Promise(resolve => setTimeout(resolve, 300));

      const optCartola = {
        margin: [15, 16, 15, 16], // Margen: 1.5cm sup/inf, 1.6cm izq/der (extra espacio para borders)
        filename: `1_Cartola_${workerName}_${workerRut}${suffix}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: true,
          scrollX: 0,
          scrollY: 0
        },
        jsPDF: { unit: 'mm', format: [330, 216], orientation: 'landscape' }
      };

      await html2pdf().set(optCartola).from(cartolaContainer).save();
      document.body.removeChild(cartolaContainer);

      // 2. Generate Carta Pages (Solicitud, Induccion, Comandancia)
      const previewSolicitud = document.getElementById('preview-solicitud');
      const previewInduccion = document.getElementById('preview-induccion');
      const previewComandancia = document.getElementById('preview-comandancia');

      if (!previewSolicitud || !previewInduccion || !previewComandancia) {
        throw new Error("No se encontraron los elementos de previsualización Carta");
      }

      const cartaContainer = document.createElement('div');
      cartaContainer.style.position = 'relative';
      cartaContainer.style.width = '175.9mm'; // 215.9mm - 20mm * 2 (margins left/right)
      cartaContainer.style.backgroundColor = '#ffffff';
      cartaContainer.style.color = '#000000';
      cartaContainer.style.margin = '0 auto';

      const page1 = previewSolicitud.firstElementChild.cloneNode(true);
      page1.className = 'printable-document solicitud-doc html2pdf__page-break';
      page1.style.transform = 'none';
      page1.style.margin = '0';
      page1.style.width = '100%';
      page1.style.height = '269.4mm'; // 279.4mm - 5mm * 2 (margins top/bottom)
      page1.style.overflow = 'hidden';
      page1.style.display = 'block';
      cartaContainer.appendChild(page1);

      const page2 = previewInduccion.firstElementChild.cloneNode(true);
      page2.className = 'printable-document induccion-doc html2pdf__page-break';
      page2.style.transform = 'none';
      page2.style.margin = '0';
      page2.style.width = '100%';
      page2.style.height = '269.4mm'; // 279.4mm - 5mm * 2
      page2.style.overflow = 'hidden';
      page2.style.display = 'block';
      cartaContainer.appendChild(page2);

      const page3 = previewComandancia.firstElementChild.cloneNode(true);
      page3.className = 'printable-document comandancia-doc';
      page3.style.transform = 'none';
      page3.style.margin = '0';
      page3.style.width = '100%';
      page3.style.height = '269.4mm'; // 279.4mm - 5mm * 2
      page3.style.overflow = 'hidden';
      page3.style.display = 'block';
      cartaContainer.appendChild(page3);

      document.body.appendChild(cartaContainer);

      // Wait for layout reflow and rendering
      await new Promise(resolve => setTimeout(resolve, 300));

      const optCarta = {
        margin: [5, 20, 5, 20], // Margen: 0.5cm sup/inf, 2.0cm izq/der
        filename: `2_Documentos_Carta_${workerName}_${workerRut}${suffix}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          logging: true,
          scrollX: 0,
          scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
      };

      await html2pdf().set(optCarta).from(cartaContainer).save();
      document.body.removeChild(cartaContainer);
    }
  } catch (error) {
    console.error("Error generating PDFs:", error);
    alert("Error al generar PDF: " + error.message + "\n\nDetalles: " + error.stack);
  } finally {
    document.body.removeChild(overlay);
    downloadBtn.innerHTML = originalText;
    downloadBtn.disabled = false;
  }
}

function setupEventListeners() {
  // Sidebar Collapse Toggle Logic
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const appContainer = document.querySelector('.app-container');
  
  // Restore sidebar state from LocalStorage
  const isSidebarCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (isSidebarCollapsed && appContainer) {
    appContainer.classList.add('collapsed-sidebar');
  }

  if (sidebarToggle && appContainer) {
    sidebarToggle.addEventListener('click', () => {
      appContainer.classList.toggle('collapsed-sidebar');
      const collapsed = appContainer.classList.contains('collapsed-sidebar');
      localStorage.setItem('sidebar-collapsed', collapsed);
    });
  }

  const navButtons = document.querySelectorAll('.nav-item button');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.closest('.nav-item').dataset.tab;
      switchTab(tabId);
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight 
      ? '<span class="icon">🌙</span> Dark Mode' 
      : '<span class="icon">☀️</span> Light Mode';
  });

  const nextButtons = document.querySelectorAll('.btn-next');
  const prevButtons = document.querySelectorAll('.btn-prev');
  
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentStep = parseInt(btn.dataset.step);
      if (validateStep(currentStep)) {
        goToStep(currentStep + 1);
      }
    });
  });

  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentStep = parseInt(btn.dataset.step);
      goToStep(currentStep - 1);
    });
  });

  const rutTrabajadorInput = document.getElementById('trabajador_rut');
  rutTrabajadorInput.addEventListener('input', (e) => {
    let value = cleanRUT(e.target.value);
    e.target.value = formatRUT(value);
    
    const validationMsg = document.getElementById('rut-validation-msg');
    if (value.length > 1) {
      if (validateRUT(value)) {
        rutTrabajadorInput.classList.remove('invalid');
        rutTrabajadorInput.classList.add('valid');
        validationMsg.textContent = 'RUT Válido';
        validationMsg.className = 'validation-msg success';
      } else {
        rutTrabajadorInput.classList.remove('valid');
        rutTrabajadorInput.classList.add('invalid');
        validationMsg.textContent = 'RUT Inválido';
        validationMsg.className = 'validation-msg error';
      }
    } else {
      rutTrabajadorInput.classList.remove('valid', 'invalid');
      validationMsg.className = 'validation-msg';
    }
  });

  const fonoInput = document.getElementById('trabajador_fono');
  fonoInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '').substring(0, 8);
    renderPreviews();
  });

  const comunaInput = document.getElementById('trabajador_comuna');
  const listadoComunas = document.getElementById('comunas-list');
  
  if (window.CHILE_FLAT_COMMUNES) {
    Object.values(window.CHILE_FLAT_COMMUNES).forEach(comObj => {
      const opt = document.createElement('option');
      opt.value = comObj.comuna;
      listadoComunas.appendChild(opt);
    });
  }

  comunaInput.addEventListener('change', (e) => {
    const comName = e.target.value.trim().toLowerCase();
    if (window.CHILE_FLAT_COMMUNES && window.CHILE_FLAT_COMMUNES[comName]) {
      const comObj = window.CHILE_FLAT_COMMUNES[comName];
      document.getElementById('trabajador_region').value = getRomanRegion(comObj.region);
      document.getElementById('trabajador_provincia').value = comObj.provincia;
      renderPreviews();
    }
  });

  const cbManipulador = document.getElementById('tipo_manipulador');
  const cbProgramador = document.getElementById('tipo_programador');
  const cbQuimicos = document.getElementById('tipo_quimicos');

  cbManipulador.addEventListener('change', () => {
    if (cbManipulador.checked) {
      cbProgramador.checked = false;
    }
    renderPreviews();
  });

  cbProgramador.addEventListener('change', () => {
    if (cbProgramador.checked) {
      cbManipulador.checked = false;
    }
    renderPreviews();
  });

  cbQuimicos.addEventListener('change', renderPreviews);

  const formInputs = document.querySelectorAll('#licencia-form input, #licencia-form select, #licencia-form textarea');
  formInputs.forEach(input => {
    input.addEventListener('change', renderPreviews);
    input.addEventListener('keyup', renderPreviews);
  });

  const previewTabBtns = document.querySelectorAll('.preview-tab-btn');
  previewTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      previewTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const docType = btn.dataset.doc;
      const sheets = document.querySelectorAll('.a4-preview-sheet');
      sheets.forEach(sheet => {
        sheet.style.display = 'none';
      });
      document.getElementById(`preview-${docType}`).style.display = 'block';
    });
  });

  document.getElementById('licencia-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveFormToHistory();
  });

  setupModalEvents('modal-faena', 'btn-add-faena', 'form-faena', saveFaena);
  setupModalEvents('modal-prevencionista', 'btn-add-prevencionista', 'form-prevencionista', savePrevencionista);

  const searchInput = document.getElementById('historial-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterHistorial(query);
  });

  const btnDownloadPDF = document.getElementById('btn-download-pdf');
  if (btnDownloadPDF) {
    btnDownloadPDF.addEventListener('click', downloadPDFs);
  }
}

function setupModalEvents(modalId, openBtnId, formId, saveCallback) {
  const modal = document.getElementById(modalId);
  const openBtn = document.getElementById(openBtnId);
  const closeBtn = modal.querySelector('.close-modal');
  const form = document.getElementById(formId);

  openBtn.addEventListener('click', () => {
    form.reset();
    form.dataset.editId = "";
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveCallback(form);
    modal.classList.remove('active');
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.tab === tabId) item.classList.add('active');
  });

  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`tab-${tabId}`).classList.add('active');
  
  if (tabId === 'formulario') {
    renderPreviews();
  }
}

function goToStep(step) {
  document.querySelectorAll('.step-container').forEach(stepDiv => {
    stepDiv.classList.remove('active');
  });
  document.getElementById(`step-${step}`).classList.add('active');

  const progressSteps = document.querySelectorAll('.progress-step');
  progressSteps.forEach((pStep, idx) => {
    const pIdx = idx + 1;
    pStep.classList.remove('active', 'completed');
    if (pIdx < step) {
      pStep.classList.add('completed');
    } else if (pIdx === step) {
      pStep.classList.add('active');
    }
  });
}

function validateStep(step) {
  if (step === 1) {
    const nombre = document.getElementById('trabajador_nombre').value.trim();
    const rut = document.getElementById('trabajador_rut').value.trim();
    const dob = document.getElementById('trabajador_dob').value;
    const fono = document.getElementById('trabajador_fono').value.trim();
    
    if (!nombre) {
      alert("Por favor ingrese el Nombre Completo.");
      return false;
    }
    if (!rut || !validateRUT(cleanRUT(rut))) {
      alert("Por favor ingrese un RUT válido.");
      return false;
    }
    if (!dob) {
      alert("Por favor ingrese la Fecha de Nacimiento.");
      return false;
    }
    if (fono.length !== 8) {
      alert("Por favor ingrese un teléfono celular válido de 8 dígitos.");
      return false;
    }
  } else if (step === 2) {
    const faenaId = document.getElementById('select_faena').value;
    const prevId = document.getElementById('select_prevencionista').value;
    
    if (!faenaId) {
      alert("Por favor seleccione una Faena de Trabajo.");
      return false;
    }
    if (!prevId) {
      alert("Por favor seleccione un Prevencionista.");
      return false;
    }
  }
  return true;
}

function initFormSelectors() {
  const selectFaena = document.getElementById('select_faena');
  selectFaena.innerHTML = '<option value="">-- Seleccionar Faena --</option>';
  dbFaenas.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = `${f.faena} (${f.empleador})`;
    selectFaena.appendChild(opt);
  });

  const selectPrev = document.getElementById('select_prevencionista');
  selectPrev.innerHTML = '<option value="">-- Seleccionar Prevencionista --</option>';
  dbPrevencionistas.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.nombre;
    selectPrev.appendChild(opt);
  });
  
  if (dbFaenas.length > 0) selectFaena.value = dbFaenas[0].id;
  if (dbPrevencionistas.length > 0) selectPrev.value = dbPrevencionistas[0].id;
}

function cleanRUT(rut) {
  if (typeof rut !== 'string') return '';
  return rut.replace(/[^0-9kK]/g, '').toUpperCase();
}

function formatRUT(rut) {
  rut = cleanRUT(rut);
  if (rut.length <= 1) return rut;
  
  const dv = rut.slice(-1);
  const cuerpo = rut.slice(0, -1);
  
  let tempCuerpo = "";
  let count = 0;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    tempCuerpo = cuerpo.charAt(i) + tempCuerpo;
    count++;
    if (count === 3 && i > 0) {
      tempCuerpo = "." + tempCuerpo;
      count = 0;
    }
  }
  
  return tempCuerpo + "-" + dv;
}

function validateRUT(rut) {
  rut = cleanRUT(rut);
  if (rut.length < 8) return false;
  
  const dv = rut.slice(-1);
  const cuerpo = rut.slice(0, -1);
  
  let suma = 0;
  let multiplo = 2;
  
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i)) * multiplo;
    multiplo = multiplo === 7 ? 2 : multiplo + 1;
  }
  
  const dvEsperado = 11 - (suma % 11);
  let dvStr = "";
  if (dvEsperado === 11) dvStr = "0";
  else if (dvEsperado === 10) dvStr = "K";
  else dvStr = dvEsperado.toString();
  
  return dv === dvStr;
}

function getRomanRegion(regionName) {
  if (!regionName) return '';
  
  const cleanName = regionName.toLowerCase().trim()
    .replace(/[áäà]/g, 'a')
    .replace(/[éëè]/g, 'e')
    .replace(/[íïì]/g, 'i')
    .replace(/[óöò]/g, 'o')
    .replace(/[úüù]/g, 'u')
    .replace(/ñ/g, 'n');
    
  for (const [keyword, roman] of Object.entries(REGION_ROMAN_MAP)) {
    if (cleanName.includes(keyword)) {
      return roman;
    }
  }
  return regionName;
}

function calculateAge(dobStr) {
  if (!dobStr) return '';
  const dob = new Date(dobStr + 'T12:00:00');
  const diff = Date.now() - dob.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function formatDateToLongText(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T12:00:00'); 
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  return `${date.getDate()}  de  ${meses[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDateToLocal(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Formato DD-MM-AAAA
  }
  return dateStr;
}

function saveFaena(form) {
  const id = form.dataset.editId || 'faena-' + Date.now();
  const faenaObj = {
    id: id,
    faena: form.faena_nombre.value.trim().toUpperCase(),
    direccionLaboral: form.faena_direccion.value.trim().toUpperCase(),
    comunaLaboral: form.faena_comuna.value.trim().toUpperCase(),
    empleador: form.faena_empleador.value.trim().toUpperCase(),
    rutEmpleador: formatRUT(cleanRUT(form.faena_rut.value.trim())),
    registroNacional: form.faena_reg_nac.value.trim().toUpperCase(),
    nRegistro: form.faena_n_reg.value.trim(),
    areaTrabajo: form.faena_area.value.trim()
  };

  const existingIdx = dbFaenas.findIndex(f => f.id === id);
  if (existingIdx !== -1) {
    dbFaenas[existingIdx] = faenaObj;
  } else {
    dbFaenas.push(faenaObj);
  }

  localStorage.setItem('db_faenas', jsonEncode(dbFaenas));
  updateFaenasTable();
  initFormSelectors();
}

function updateFaenasTable() {
  const tbody = document.querySelector('#table-faenas tbody');
  tbody.innerHTML = '';

  dbFaenas.forEach(f => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${f.faena}</strong></td>
      <td>${f.empleador}</td>
      <td>${f.rutEmpleador}</td>
      <td>${f.direccionLaboral}, ${f.comunaLaboral}</td>
      <td class="table-actions">
        <button class="icon-btn" onclick="editFaena('${f.id}')" title="Editar">✏️</button>
        <button class="icon-btn delete" onclick="deleteFaena('${f.id}')" title="Eliminar">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.editFaena = function(id) {
  const f = dbFaenas.find(item => item.id === id);
  if (!f) return;

  const form = document.getElementById('form-faena');
  form.dataset.editId = f.id;
  form.faena_nombre.value = f.faena;
  form.faena_direccion.value = f.direccionLaboral;
  form.faena_comuna.value = f.comunaLaboral;
  form.faena_empleador.value = f.empleador;
  form.faena_rut.value = f.rutEmpleador;
  form.faena_reg_nac.value = f.registroNacional;
  form.faena_n_reg.value = f.nRegistro;
  form.faena_area.value = f.areaTrabajo;

  document.getElementById('modal-faena').classList.add('active');
};

window.deleteFaena = function(id) {
  if (confirm('¿Estás seguro de eliminar esta faena?')) {
    dbFaenas = dbFaenas.filter(f => f.id !== id);
    localStorage.setItem('db_faenas', jsonEncode(dbFaenas));
    updateFaenasTable();
    initFormSelectors();
  }
};

function savePrevencionista(form) {
  const id = form.dataset.editId || 'prev-' + Date.now();
  const prevObj = {
    id: id,
    nombre: form.prev_nombre.value.trim().toUpperCase(),
    rut: formatRUT(cleanRUT(form.prev_rut.value.trim())),
    titulo: form.prev_titulo.value.trim(),
    registroSNS: form.prev_sns.value.trim()
  };

  const existingIdx = dbPrevencionistas.findIndex(p => p.id === id);
  if (existingIdx !== -1) {
    dbPrevencionistas[existingIdx] = prevObj;
  } else {
    dbPrevencionistas.push(prevObj);
  }

  localStorage.setItem('db_prevencionistas', jsonEncode(dbPrevencionistas));
  updatePrevencionistasTable();
  initFormSelectors();
}

function updatePrevencionistasTable() {
  const tbody = document.querySelector('#table-prevencionistas tbody');
  tbody.innerHTML = '';

  dbPrevencionistas.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${p.nombre}</strong></td>
      <td>${p.rut}</td>
      <td>${p.titulo}</td>
      <td>${p.registroSNS}</td>
      <td class="table-actions">
        <button class="icon-btn" onclick="editPrevencionista('${p.id}')" title="Editar">✏️</button>
        <button class="icon-btn delete" onclick="deletePrevencionista('${p.id}')" title="Eliminar">🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.editPrevencionista = function(id) {
  const p = dbPrevencionistas.find(item => item.id === id);
  if (!p) return;

  const form = document.getElementById('form-prevencionista');
  form.dataset.editId = p.id;
  form.prev_nombre.value = p.nombre;
  form.prev_rut.value = p.rut;
  form.prev_titulo.value = p.titulo;
  form.prev_sns.value = p.registroSNS;

  document.getElementById('modal-prevencionista').classList.add('active');
};

window.deletePrevencionista = function(id) {
  if (confirm('¿Estás seguro de eliminar este prevencionista?')) {
    dbPrevencionistas = dbPrevencionistas.filter(p => p.id !== id);
    localStorage.setItem('db_prevencionistas', jsonEncode(dbPrevencionistas));
    updatePrevencionistasTable();
    initFormSelectors();
  }
};

function getFormInputsData() {
  const selectedTypes = [];
  if (document.getElementById('tipo_manipulador').checked) selectedTypes.push("MANIPULADOR DE EXPLOSIVOS");
  if (document.getElementById('tipo_programador').checked) selectedTypes.push("PROGRAMADOR CALCULISTA");
  if (document.getElementById('tipo_quimicos').checked) selectedTypes.push("MANIPULADOR DE PRODUCTOS QUIMICOS");

  const faenaId = document.getElementById('select_faena').value;
  const prevId = document.getElementById('select_prevencionista').value;
  
  const faenaObj = dbFaenas.find(f => f.id === faenaId) || {};
  const prevObj = dbPrevencionistas.find(p => p.id === prevId) || {};

  // Formato del teléfono: Prefijo fijo + entrada
  const rawFono = document.getElementById('trabajador_fono').value.trim();
  const fullFono = rawFono ? `+56 9 ${rawFono}` : '';

  // Determinar dinámicamente los registros de faena según el tipo
  let regNac = faenaObj.registroNacional || '';
  let nReg = faenaObj.nRegistro || '';
  
  if (faenaObj.id === 'faena-1') {
    if (selectedTypes.includes("MANIPULADOR DE PRODUCTOS QUIMICOS")) {
      regNac = "CONSUMIDOR PRODUCTOS QUIMICOS";
      nReg = "51/007/00004";
    } else {
      regNac = "COMERCIANTE DE EXPLOSIVOS";
      nReg = "70/007/00007";
    }
  }

  // Generación automática del texto del curso
  let cursosCalculados = [];
  if (selectedTypes.includes("MANIPULADOR DE EXPLOSIVOS") || selectedTypes.includes("PROGRAMADOR CALCULISTA")) {
    cursosCalculados.push("CURSOS REALIZADOS SOBRE MANIPULACIÓN DE EXPLOSIVOS:\nCURSO DE EXPLOSIVO REALIZADO POR EL EXPERTO EN PREVENCIÓN DE RIESGO DE ENAEX SERVICIOS  S.A.");
  }
  if (selectedTypes.includes("MANIPULADOR DE PRODUCTOS QUIMICOS")) {
    cursosCalculados.push("CURSOS REALIZADOS SOBRE MANIPULACIÓN DE PRODUCTOS QUIMICOS:\nCURSO DE EXPLOSIVO REALIZADO POR EL EXPERTO EN PREVENCIÓN DE RIESGO DE ENAEX SERVICIOS  S.A.");
  }

  const dobVal = document.getElementById('trabajador_dob').value;
  const induccionVal = document.getElementById('fecha_induccion').value;
  const tramiteVal = document.getElementById('fecha_tramite').value;

  return {
    trabajador: {
      nombre: document.getElementById('trabajador_nombre').value.trim().toUpperCase(),
      rut: formatRUT(cleanRUT(document.getElementById('trabajador_rut').value.trim())),
      dob: dobVal,
      nacionalidad: document.getElementById('trabajador_nacionalidad').value.trim().toUpperCase(),
      sexo: document.getElementById('trabajador_sexo').value,
      bornIn: document.getElementById('trabajador_born_in').value.trim().toUpperCase(),
      domicilio: document.getElementById('trabajador_domicilio').value.trim().toUpperCase(),
      comuna: document.getElementById('trabajador_comuna').value.trim().toUpperCase(),
      provincia: document.getElementById('trabajador_provincia').value.trim().toUpperCase(),
      region: document.getElementById('trabajador_region').value.trim().toUpperCase(),
      fono: fullFono,
      cargo: document.getElementById('trabajador_cargo').value.trim().toUpperCase(),
      escolaridad: document.getElementById('trabajador_escolaridad').value,
      padre: document.getElementById('trabajador_padre').value.trim().toUpperCase(),
      madre: document.getElementById('trabajador_madre').value.trim().toUpperCase()
    },
    tramite: {
      tipos: selectedTypes,
      fechaTramite: tramiteVal,
      fechaInduccion: induccionVal,
      horasCapacitacion: "8 horas pedagógicas",
      autoridad: document.getElementById('autoridad_fiscalizadora').value.trim().toUpperCase(),
      nRegistroDgmn: document.getElementById('n_registro_dgmn').value.trim(),
      nCertificado: document.getElementById('n_certificado_comandancia').value.trim(),
      cursos: cursosCalculados.join("\n\n")
    },
    faena: {
      ...faenaObj,
      registroNacional: regNac,
      nRegistro: nReg
    },
    prevencionista: prevObj
  };
}

function saveFormToHistory() {
  const data = getFormInputsData();
  
  if (data.tramite.tipos.length === 0) {
    alert("Por favor seleccione al menos un Tipo de Licencia.");
    return;
  }

  const record = {
    id: 'req-' + Date.now(),
    timestamp: new Date().toISOString(),
    data: data
  };

  dbHistorial.unshift(record);
  localStorage.setItem('db_historial', jsonEncode(dbHistorial));
  updateHistorialUI();
  
  let currentCounter = parseInt(localStorage.getItem('next_certificate_number')) || 1;
  const nextVal = currentCounter + 1;
  localStorage.setItem('next_certificate_number', nextVal.toString());
  
  document.getElementById('next_cert_counter').value = nextVal;
  pickerTramite.setValue(pickerTramite.hiddenInput.value); 
  document.getElementById('n_certificado_comandancia').value = nextVal;

  alert("Datos guardados en el historial local.");
  switchTab('historial');
}

function updateHistorialUI() {
  const container = document.getElementById('history-list-container');
  container.innerHTML = '';

  if (dbHistorial.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-secondary);padding:2rem;">No hay registros en el historial.</p>';
    return;
  }

  renderHistorialItems(dbHistorial);
}

function renderHistorialItems(items) {
  const container = document.getElementById('history-list-container');
  container.innerHTML = '';

  items.forEach(h => {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    const tiposStr = h.data.tramite.tipos.join(', ');
    const dateStr = formatDateToLocal(h.data.tramite.fechaTramite);

    item.innerHTML = `
      <div class="history-info">
        <div class="history-name">${h.data.trabajador.nombre}</div>
        <div class="history-meta">
          <span><strong>RUT:</strong> ${h.data.trabajador.rut}</span>
          <span><strong>Fecha:</strong> ${dateStr}</span>
          <span><strong>Tipos:</strong> ${tiposStr}</span>
        </div>
      </div>
      <div class="history-actions">
        <button class="btn btn-primary" onclick="loadRecordToForm('${h.id}')" title="Cargar en Formulario">📂 Cargar</button>
        <button class="btn btn-success" onclick="printRecordDirectly('${h.id}')" title="Imprimir PDF">🖨️ Imprimir</button>
        <button class="icon-btn delete" onclick="deleteRecord('${h.id}')" title="Eliminar del Historial">🗑️</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function filterHistorial(query) {
  if (!query) {
    renderHistorialItems(dbHistorial);
    return;
  }

  const filtered = dbHistorial.filter(h => {
    return h.data.trabajador.nombre.toLowerCase().includes(query) || 
           h.data.trabajador.rut.toLowerCase().includes(query);
  });
  renderHistorialItems(filtered);
}

window.deleteRecord = function(id) {
  if (confirm('¿Desea eliminar esta solicitud del historial?')) {
    dbHistorial = dbHistorial.filter(h => h.id !== id);
    localStorage.setItem('db_historial', jsonEncode(dbHistorial));
    updateHistorialUI();
  }
};

window.loadRecordToForm = function(id) {
  const rec = dbHistorial.find(h => h.id === id);
  if (!rec) return;

  const data = rec.data;
  
  document.getElementById('trabajador_nombre').value = data.trabajador.nombre;
  document.getElementById('trabajador_rut').value = data.trabajador.rut;
  
  pickerDob.setValue(data.trabajador.dob);
  pickerInduccion.setValue(data.tramite.fechaInduccion);
  pickerTramite.setValue(data.tramite.fechaTramite);

  document.getElementById('trabajador_nacionalidad').value = data.trabajador.nacionalidad;
  document.getElementById('trabajador_sexo').value = data.trabajador.sexo;
  document.getElementById('trabajador_born_in').value = data.trabajador.bornIn;
  document.getElementById('trabajador_domicilio').value = data.trabajador.domicilio;
  document.getElementById('trabajador_comuna').value = data.trabajador.comuna;
  document.getElementById('trabajador_provincia').value = data.trabajador.provincia;
  document.getElementById('trabajador_region').value = data.trabajador.region;
  
  if (data.trabajador.fono && data.trabajador.fono.includes('+56 9 ')) {
    document.getElementById('trabajador_fono').value = data.trabajador.fono.replace('+56 9 ', '');
  } else {
    document.getElementById('trabajador_fono').value = data.trabajador.fono || '';
  }

  document.getElementById('trabajador_cargo').value = data.trabajador.cargo;
  document.getElementById('trabajador_escolaridad').value = data.trabajador.escolaridad;
  document.getElementById('trabajador_padre').value = data.trabajador.padre;
  document.getElementById('trabajador_madre').value = data.trabajador.madre;

  document.getElementById('tipo_manipulador').checked = data.tramite.tipos.includes("MANIPULADOR DE EXPLOSIVOS");
  document.getElementById('tipo_programador').checked = data.tramite.tipos.includes("PROGRAMADOR CALCULISTA");
  document.getElementById('tipo_quimicos').checked = data.tramite.tipos.includes("MANIPULADOR DE PRODUCTOS QUIMICOS");

  document.getElementById('n_registro_dgmn').value = data.tramite.nRegistroDgmn;
  document.getElementById('n_certificado_comandancia').value = data.tramite.nCertificado;

  const numCert = parseInt(data.tramite.nCertificado);
  if (!isNaN(numCert)) {
    document.getElementById('next_cert_counter').value = numCert;
    localStorage.setItem('next_certificate_number', numCert.toString());
  }

  const selectFaena = document.getElementById('select_faena');
  const selectPrev = document.getElementById('select_prevencionista');
  
  if (dbFaenas.some(f => f.id === data.faena.id)) {
    selectFaena.value = data.faena.id;
  } else if (data.faena.id) {
    const opt = document.createElement('option');
    opt.value = data.faena.id;
    opt.textContent = `${data.faena.faena} (Cargado)`;
    selectFaena.appendChild(opt);
    selectFaena.value = data.faena.id;
  }

  if (dbPrevencionistas.some(p => p.id === data.prevencionista.id)) {
    selectPrev.value = data.prevencionista.id;
  } else if (data.prevencionista.id) {
    const opt = document.createElement('option');
    opt.value = data.prevencionista.id;
    opt.textContent = `${data.prevencionista.nombre} (Cargado)`;
    selectPrev.appendChild(opt);
    selectPrev.value = data.prevencionista.id;
  }

  document.getElementById('trabajador_rut').dispatchEvent(new Event('input'));
  switchTab('formulario');
  goToStep(1);
  alert("Datos cargados correctamente en el formulario.");
};

window.printRecordDirectly = function(id) {
  const rec = dbHistorial.find(h => h.id === id);
  if (!rec) return;
  
  compilePrintHTML(rec.data);
  setTimeout(() => {
    window.print();
  }, 300);
};

// Helpers para determinar Títulos de Cartola y Solicitud según formato oficial
function getCartolaTitle(tipo) {
  if (tipo === "MANIPULADOR DE PRODUCTOS QUIMICOS") {
    return "MANIPULADOR PRODUCTOS QUIMICOS";
  } else if (tipo === "PROGRAMADOR CALCULISTA") {
    return "PROGRAMADOR CALCULISTA";
  } else {
    return "MANIPULADORES DE EXPLOSIVOS";
  }
}

function getSolicitudSubtitle(tipo) {
  if (tipo === "MANIPULADOR DE PRODUCTOS QUIMICOS") {
    return "MANIPULADOR PRODUCTOS QUIMICOS";
  } else if (tipo === "PROGRAMADOR CALCULISTA") {
    return "PROGRAMADOR CALCULISTA";
  } else {
    return "MANIPULADOR DE EXPLOSIVOS";
  }
}

function renderPreviews() {
  const data = getFormInputsData();
  const activeType = data.tramite.tipos[0] || "MANIPULADOR DE EXPLOSIVOS";
  
  document.getElementById('preview-cartola').innerHTML = generateCartolaHTML(data, activeType);
  document.getElementById('preview-solicitud').innerHTML = generateSolicitudHTML(data, activeType);
  document.getElementById('preview-induccion').innerHTML = generateInduccionHTML(data, activeType);
  document.getElementById('preview-comandancia').innerHTML = generateComandanciaHTML(data, activeType);

  compilePrintHTML(data);
}

function compilePrintHTML(data) {
  const printArea = document.getElementById('print-area');
  printArea.innerHTML = '';

  const tipos = data.tramite.tipos.length > 0 ? data.tramite.tipos : ["MANIPULADOR DE EXPLOSIVOS"];

  tipos.forEach(tipo => {
    // 1. Cartola (Página 1: Oficio Horizontal)
    const cartolaPage = document.createElement('div');
    cartolaPage.className = 'print-page cartola-print-page';
    cartolaPage.innerHTML = generateCartolaHTML(data, tipo);
    printArea.appendChild(cartolaPage);

    // 2. Solicitud (Página 2: Carta Vertical)
    const solicitudPage = document.createElement('div');
    solicitudPage.className = 'print-page carta-print-page';
    solicitudPage.innerHTML = generateSolicitudHTML(data, tipo);
    printArea.appendChild(solicitudPage);

    // 3. Inducción (Página 3: Carta Vertical)
    const induccionPage = document.createElement('div');
    induccionPage.className = 'print-page carta-print-page';
    induccionPage.innerHTML = generateInduccionHTML(data, tipo);
    printArea.appendChild(induccionPage);

    // 4. Certificado Comandancia (Página 4: Carta Vertical)
    const comandanciaPage = document.createElement('div');
    comandanciaPage.className = 'print-page carta-print-page';
    comandanciaPage.innerHTML = generateComandanciaHTML(data, tipo);
    printArea.appendChild(comandanciaPage);
  });
}

// --- PLANTILLAS OFICIALES EN HTML ---

function generateCartolaHTML(data, tipo) {
  const t = data.trabajador;
  const f = data.faena;
  const tr = data.tramite;
  
  const titleType = getCartolaTitle(tipo);
  
  return `
    <div class="printable-document cartola-doc" style="border: 1px solid #000; width: 100%; height: 193mm; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; font-family: Arial, Helvetica, sans-serif; background-color: #fff; color: #000; padding: 0;">
      <!-- Bloque Superior: Huella/Foto/Firma + Datos Personales + Registro DGMN -->
      <table style="width: 100%; border-collapse: collapse; border-bottom: 1px solid #000; flex: 0 0 auto;">
        <tr>
          <!-- Columna Izquierda: Huella, Foto, Firma (Ancho 30%) -->
          <td style="width: 30%; border-right: 1px solid #000; vertical-align: top; padding: 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 50%; border-right: 1px solid #000; border-bottom: 1px solid #000; text-align: center; font-size: 7.5pt; font-weight: bold; height: 150px; padding: 6px; vertical-align: top; line-height: 1.2;">
                  IMPRESIÓN DEDO<br>PULGAR
                </td>
                <td style="width: 50%; border-bottom: 1px solid #000; text-align: center; font-size: 7.5pt; font-weight: bold; height: 150px; padding: 6px; vertical-align: top; line-height: 1.2;">
                  FOTOGRAFIA CON<br>R.U.T.
                </td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: center; padding: 0 10px; height: 80px; vertical-align: bottom;">
                  <div style="border-bottom: 1.5px solid #000; width: 90%; margin: 0 auto 5px auto;"></div>
                  <div style="font-size: 8pt; font-weight: bold; margin-bottom: 8px;">FIRMA DEL MANIPULADOR</div>
                </td>
              </tr>
            </table>
          </td>
          
          <!-- Columna Central y Derecha Combinadas (Ancho 70%) -->
          <td style="width: 70%; vertical-align: top; padding: 8px 15px 5px 15px;">
            <!-- Fila Superior: Título y Cuadro DGMN -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
              <tr>
                <td style="vertical-align: middle; text-align: center; padding-right: 15px;">
                  <h2 style="font-size: 14pt; font-weight: bold; line-height: 1.3; margin: 0; font-family: Arial, sans-serif;">
                    CARTOLA DE ANTECEDENTES PERSONALES PARA<br>
                    ${titleType}
                  </h2>
                </td>
                <td style="width: 150px; vertical-align: top; padding: 0;">
                  <table style="width: 100%; border-collapse: collapse; border: 1px solid #000;">
                    <tr>
                      <td style="font-size: 7.5pt; font-weight: bold; text-align: center; padding: 3px; border-bottom: 1px solid #000; font-family: Arial, sans-serif; line-height: 1.1; background-color: #fff;">
                        Nº REGISTRO DE LA<br>D.G.M.N.
                      </td>
                    </tr>
                    <tr>
                      <td style="font-size: 10pt; font-weight: bold; text-align: center; padding: 4px; height: 26px; vertical-align: middle; font-family: Arial, sans-serif; background-color: #fff;">
                        &nbsp;
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            
            <!-- Fila Inferior: Tabla de Metadatos (4 Columnas) -->
            <table style="width: 100%; border-collapse: collapse; font-size: 8pt; line-height: 1.45; font-family: Arial, sans-serif; margin-top: 5px;">
              <tr>
                <td style="width: 25%; font-weight: normal; padding: 1px 0;">NOMBRE COMPLETO:</td>
                <td colspan="3" style="font-weight: bold; padding: 1px 0;">${t.nombre || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">R.U.T. Nº:</td>
                <td style="font-weight: bold; width: 38%; padding: 1px 0;">${t.rut || '&nbsp;'}</td>
                <td style="width: 22%; font-weight: normal; padding: 1px 0; text-align: left;">FONO:</td>
                <td style="width: 15%; font-weight: bold; padding: 1px 0;">${t.fono || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">NACIDO EN:</td>
                <td style="font-weight: bold; padding: 1px 0;">${t.bornIn || '&nbsp;'}</td>
                <td style="font-weight: normal; padding: 1px 0; text-align: left; white-space: nowrap;">FECHA DE NACIMIENTO:</td>
                <td style="font-weight: bold; padding: 1px 0;">${formatDateToLocal(t.dob) || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">DOMICILIO ACTUAL:</td>
                <td style="font-weight: bold; padding: 1px 0;">${t.domicilio || '&nbsp;'}</td>
                <td style="font-weight: normal; padding: 1px 0; text-align: left;">Comuna:</td>
                <td style="font-weight: bold; padding: 1px 0;">${t.comuna || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">DOMICILIO LABORAL:</td>
                <td style="font-weight: bold; padding: 1px 0;">${f.faena || '&nbsp;'}</td>
                <td style="font-weight: normal; padding: 1px 0; text-align: left;">Comuna:</td>
                <td style="font-weight: bold; padding: 1px 0;">${f.comuna || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">NOMBRE DEL PADRE:</td>
                <td colspan="3" style="font-weight: bold; padding: 1px 0;">${t.padre || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">NOMBRE DE LA MADRE:</td>
                <td colspan="3" style="font-weight: bold; padding: 1px 0;">${t.madre || '&nbsp;'}</td>
              </tr>
              <tr>
                <td style="font-weight: normal; padding: 1px 0;">EMPRESA:</td>
                <td colspan="3" style="font-weight: bold; padding: 1px 0;">${f.empleador || 'ENAEX SERVICIOS S.A.'}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <!-- Bloque Medio: CONTROL DE ACTIVIDADES -->
      <div style="font-size: 24pt; text-align: center; padding: 3px 0; border-bottom: 1px solid #000; letter-spacing: 0.05em; background-color: #fff; flex: 0 0 auto;">
        CONTROL DE ACTIVIDADES
      </div>

      <!-- Bloque Inferior: Grilla de Actividades (Ancho completo) -->
      <div style="flex: 1 1 auto; display: flex; align-items: stretch; padding: 15px 5px 10px 5px; box-sizing: border-box;">
        <table style="width: 100%; border-collapse: collapse; height: 100%;">
          <tr>
            <!-- Columna 1: Actividades 1, 2, 3 -->
            <td style="width: 27.3%; padding: 0; vertical-align: top; height: 100%;">
              <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
                <!-- Actividad 1 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>1.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.: &nbsp;</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera : &nbsp; &nbsp;
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 2 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>2.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 3 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>3.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
              </div>
            </td>
            <!-- Columna Spacer 1 -->
            <td style="width: 6%;"></td>
            
            <!-- Columna 2: Actividades 4, 5, 6 -->
            <td style="width: 27.3%; padding: 0; vertical-align: top; height: 100%;">
              <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
                <!-- Actividad 4 -->
                <div style="font-size: 9pt; line-height: 2; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>4.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 5 -->
                <div style="font-size: 9pt; line-height: 2; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>5.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 6 -->
                <div style="font-size: 9pt; line-height: 2; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>6.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
              </div>
            </td>
            <!-- Columna Spacer 2 -->
            <td style="width: 6%;"></td>
            
            <!-- Columna 3: Actividades 7, 8, 9 -->
            <td style="width: 27.3%; padding: 0; vertical-align: top; height: 100%;">
              <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; box-sizing: border-box;">
                <!-- Actividad 7 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>7.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 8 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>8.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
                
                <!-- Actividad 9 -->
                <div style="font-size: 9pt; line-height: 1.5; font-family: Arial, sans-serif;">
                  <div style="display: flex; justify-content: space-between;">
                    <span><strong>9.- &nbsp; FECHA:</strong></span>
                  </div>
                  <div style="display: flex; justify-content: space-between; padding-left: 20px;">
                    <span>AF.:</span>
                    <span style="margin-right: 15px;"><strong>Nº Insc.</strong></span>
                  </div>
                  <div style="padding-left: 20px;">
                    Faena Minera:
                  </div>
                  <div style="padding-left: 20px;">
                    Desde el:
                  </div>
                  <div style="padding-left: 20px;">
                    Hasta el:
                  </div>
                </div>
              </div>
            </td>
            <!-- Columna Spacer 3 -->
            <td style="width: 6%;"></td>
          </tr>
        </table>
      </div>
    </div>
  `;
}

function generateSolicitudHTML(data, tipo) {
  const t = data.trabajador;
  const f = data.faena;
  const tr = data.tramite;
  
  const subTitle = getSolicitudSubtitle(tipo);

  return `
    <div class="printable-document solicitud-doc" style="width: 100%; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif !important; background-color: #fff; color: #000; padding: 15px 10px;padding-bottom:0">
      <div class="solicitud-header" style="position: relative; margin-bottom: 20px; font-family: Arial, sans-serif;">
        <div style="position: absolute; right: 0; top: 0; font-size: 11pt; font-weight: bold; padding: 4px 15px; width: 110px; height: 26px; box-sizing: border-box; line-height: 1.2;">
          N°__________ &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>
        <div style="font-size: 9pt; font-weight: bold; line-height: 1.3; font-family: Arial, sans-serif;">
          REPUBLICA DE CHILE<br>
          MINISTERIO DE DEFENSA NACIONAL<br>
          Dirección General de Movilización Nacional
        </div>
      </div>

      <div class="solicitud-title" style="font-size: 14pt; font-weight: bold; text-align: center; margin-top: 25px; margin-bottom: 5px; font-family: Arial, sans-serif;">
        SOLICITUD DE INSCRIPCIÓN O RENOVACIÓN PARA
      </div>
      <div class="solicitud-subtitle" style="font-size: 14pt; font-weight: bold; text-align: center; margin-bottom: 25px; font-family: Arial, sans-serif;">
        ${subTitle.toUpperCase()}<br>
        <span style="font-size: 10pt; font-weight: bold;">(UNICA POR PERSONA)</span>
      </div>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 15px; font-size: 9.5pt; font-family: Arial, sans-serif;">
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 15%;">FECHA:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 20%;">${formatDateToLocal(tr.fechaTramite)}</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 38%;">COMPROBANTE DE PAGO N°:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; width: 12%;"></td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 10%;">ITEM:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; width: 15%;"></td>
        </tr>
        <tr>
          <td colspan="2" style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">AUTORIDAD FISCALIZADORA:</td>
          <td colspan="4" style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">${tr.autoridad || '&nbsp;'}</td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 10px; font-size: 9.5pt; font-family: Arial, sans-serif;">
        <tr>
          <td colspan="4" style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; text-align: left;">
            SOLICITA INSCRIBIRSE COMO ${subTitle.toUpperCase()}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 22%;">NOMBRES:</td>
          <td colspan="3" style="border: 1px solid #000; padding: 6px 8px; font-weight: bold;">${t.nombre || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">RUT:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 33%;">${t.rut || '&nbsp;'}</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 15%;">SEXO:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 30%;">${t.sexo || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">FECHA NAC:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 33%;">${formatDateToLocal(t.dob) || '&nbsp;'}</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 15%;">NACIONALIDAD:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 30%;">${t.nacionalidad || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">DOMICILIO PART.</td>
          <td colspan="3" style="border: 1px solid #000; padding: 6px 8px; font-weight: bold;">${t.domicilio || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">FONO:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 33%;">${t.fono || '&nbsp;'}</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 15%;">REGION:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 30%;">${t.region || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">PROVINCIA:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 33%;">${t.provincia || '&nbsp;'}</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 15%;">COMUNA:</td>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 30%;">${t.comuna || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 6px 8px; font-weight: normal;">CATEGORÍA:</td>
          <td colspan="3" style="border: 1px solid #000; padding: 6px 8px; font-weight: bold;">${tipo}</td>
        </tr>
      </table>

      <!-- Fila 1 del Empleador -->
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 9.5pt; font-family: Arial, sans-serif; margin-bottom: 0; margin-top: 0;">
        <tr>
          <td style="border-right: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 1%; white-space: nowrap;">NOMBRE DEL EMPLEADOR:</td>
          <td style="padding: 6px 8px; font-weight: bold;">${f.empleador || '&nbsp;'}</td>
        </tr>
      </table>
      
      <!-- Fila 2 del Empleador -->
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 9.5pt; font-family: Arial, sans-serif; margin-bottom: 0; margin-top: 0;">
        <tr>
          <td style="border-right: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 12.45%; white-space: nowrap;">RUT:</td>
          <td style="border-right: 1px solid #000; padding: 6px 8px; font-weight: bold; width: 14.95%; white-space: nowrap;">${f.rutEmpleador || '&nbsp;'}</td>
          <td style="border-right: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 1%; white-space: nowrap;">INSCRITO EN EL REG. NAC. COMO:</td>
          <td style="padding: 6px 8px; font-weight: bold;">${f.registroNacional || '&nbsp;'}</td>
        </tr>
      </table>
      
      <!-- Fila 3 del Empleador -->
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; border-bottom: none; font-size: 9.5pt; font-family: Arial, sans-serif; margin-bottom: 0; margin-top: 0;">
        <tr>
          <td style="border-right: 1px solid #000; padding: 6px 8px; font-weight: normal; width: 12%; white-space: nowrap;">CON EL N°:</td>
          <td style="padding: 6px 8px; font-weight: bold;">${f.nRegistro || '&nbsp;'}</td>
        </tr>
      </table>
      
      <!-- Fila 4 del Empleador (Cursos) -->
      <table style="width: 100%; border-collapse: collapse; border: 1px solid #000; margin-bottom: 10px; font-size: 9.5pt; font-family: Arial, sans-serif; margin-top: 0;">
        <tr>
          <td style="padding: 8px; font-size: 10pt; line-height: 1.45; white-space: pre-line; height: 70px; font-family: Arial, sans-serif;">${tr.cursos}</td>
        </tr>
      </table>

      <div style="border: 1px solid #000; padding: 4px; font-size: 9.5pt; text-align: left; font-weight: bold; margin-bottom: 0; font-family: Arial, sans-serif;">
        USO EXCLUSIVO DE LA AUTORIDAD FISCALIZADORA
      </div>
      <div style="border: 1px solid #000; border-top: none;border-bottom: none; padding: 8px 8px; font-size: 9pt; height: 50px; margin-bottom: 0px; font-family: Arial, sans-serif;"></div>
      <div style="border: 1px solid #000; padding: 4px; font-size: 9.5pt; text-align: left; font-weight: bold; margin-bottom: 0; font-family: Arial, sans-serif;">N° DE INSCRIPCIÓN LOCAL EN EL REG. DE LA AA.FF.      </div>
      <div style="border: 1px solid #000; border-top: none; padding: 8px 8px; font-size: 9pt; height: 25px; margin-bottom: 15px; font-family: Arial, sans-serif;">&nbsp;</div>

      <div class="solicitud-juramento" style="font-size: 8.5pt; line-height: 1.4; margin-bottom: 5px; font-family: Arial, sans-serif;">
        <p style="margin-bottom: 6px; display: flex; gap: 8px;">
          <span>➢</span>
          <span>Declaro bajo juramento tener los conocimientos Técnicos necesarios en el uso de Explosivos y estar apto para desempeñarme en la Categoría solicitada.</span>
        </p>
        <p style="display: flex; gap: 8px;">
          <span>➢</span>
          <span>Declaro además que los datos proporcionados son verídicos, correspondiendo al suscrito y ante cualquier cambio este será comunicado a la Autoridad Fiscalizadora dentro de 48 horas siguientes.</span>
        </p>
      </div>

      <div class="signature-line-block" style="margin-top: 60px; display: flex; justify-content: flex-end; font-family: Arial, sans-serif; margin-bottom: 0px !important;">
        <div class="signature-box" style="width: 220px; border-top: 1px solid #000; text-align: center; padding-top: 5px; font-size: 9pt; font-weight: bold; font-family: Arial, sans-serif;">
          FIRMA DEL SOLICITANTE
        </div>
      </div>
    </div>
  `;
}

function generateInduccionHTML(data, tipo) {
  const t = data.trabajador;
  const f = data.faena;
  const tr = data.tramite;
  const p = data.prevencionista;

  const userCargo = t.cargo || '&nbsp;';
  const userEscolaridad = t.escolaridad || '&nbsp;';

  return `
    <div class="printable-document" style="padding: 10px 0;">
      <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #000; margin-bottom: 20px;">
        <tr>
          <td style="width: 25%; border-right: 1.5px solid #000; padding: 10px; text-align: center; vertical-align: middle;">
            ${ENAEX_SVG_LOGO}
          </td>
          <td style="width: 42%; border-right: 1.5px solid #000; padding: 10px; text-align: center; vertical-align: middle;">
            <h2 style="font-size: 10pt; font-weight: bold; margin: 0; line-height: 1.3;">
              INDUCCIÓN BASICA PARA<br>
              OPTAR A LA LICENCIA DE<br>
              MANIPULADOR DE<br>
              EXPLOSIVOS Y PRODUCTOS<br>
              QUIMICOS
            </h2>
          </td>
          <td style="width: 18%; border-right: 1.5px solid #000; padding: 8px; text-align: center; vertical-align: middle; font-size: 8pt; font-weight: 500; line-height: 1.3;">
            Curso básico en<br>manipulación de<br>explosivos y<br>productos<br>químicos
          </td>
          <td style="width: 15%; padding: 8px; text-align: center; vertical-align: middle; font-size: 7.5pt; font-weight: bold;">
            CÓDIGO<br>SSM – CBE-02
          </td>
        </tr>
      </table>

      <div style="background-color: #ffff00; border: 1.5px solid #000; font-weight: bold; text-align: center; padding: 4px; font-size: 9.5pt; margin-bottom: 0;">
        DATOS GENERALES TRABAJADOR
      </div>
      <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #000; margin-bottom: 20px; font-size: 9pt;">
        <tr>
          <td style="width: 35%; border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">NOMBRE DEL TRABAJADOR</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">${t.nombre || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">CEDULA DE IDENTIDAD</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">${t.rut || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">FECHA DE NACIMIENTO</td>
          <td style="border: 1px solid #000; padding: 5px 8px;">${formatDateToLocal(t.dob) || '&nbsp;'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">CARGO</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">${userCargo}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">AREA DE TRABAJO</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">${f.areaTrabajo || 'MINA'}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">ESCOLARIDAD</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; font-size: 8.5pt;">${userEscolaridad.toUpperCase()}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">FECHA INDUCCIÓN</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">${formatDateToLocal(tr.fechaInduccion)}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold; background-color: #f8fafc;">TOTAL HORAS DE CAPACITACION</td>
          <td style="border: 1px solid #000; padding: 5px 8px; font-weight: bold;">8 horas pedagógicas</td>
        </tr>
      </table>

      <table style="width: 100%; border-collapse: collapse; border: 1.5px solid #000; font-size: 9pt; margin-bottom: 20px;">
        <tr style="background-color: #ffff00; font-weight: bold; text-align: center;">
          <td style="width: 50%; border: 1px solid #000; padding: 4px;">INDUCCIÓN:</td>
          <td style="width: 50%; border: 1px solid #000; padding: 4px;">FIRMA DEL TRABAJADOR</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 10px; vertical-align: top; text-align: justify; font-size: 8.5pt; line-height: 1.4;">
            <strong>Objetivo:</strong><br>
            Capacitar a los trabajadores de Enaex Servicios S.A. en el conocimiento básico de todas aquellas materias relacionadas con el trasporte, uso y manejo de explosivos y productos químicos en faena minera, para la obtención de la Licencia de <strong>${tipo}</strong>.
            <br><br>
            <strong>Temas:</strong>
            <ol style="margin-left: 15px; margin-top: 5px;">
              <li>Definición de explosivo y productos químicos sometido a control.</li>
              <li>Clasificación de los explosivos y productos químicos sometido a control.</li>
              <li>Aspectos Legales Aplicables.</li>
              <li>Medidas de Seguridad al Trabajar con Explosivos y productos químicos sometido a control.</li>
            </ol>
          </td>
          <td style="border: 1px solid #000; text-align: center; vertical-align: bottom; padding-bottom: 25px; height: 160px; background-color: #fff;">
            <div style="width: 80%; border-bottom: 1.5px solid #a3b8cc; margin: 0 auto;"></div>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 10px; font-size: 8.5pt; line-height: 1.4; text-align: justify;">
            Decreto 298 relacionado con el transporte de sustancias peligrosas por calles y caminos de Chile.
          </td>
          <td style="border: 1px solid #000; text-align: center; vertical-align: bottom; padding-bottom: 15px; height: 60px; background-color: #fff;">
            <div style="width: 80%; border-bottom: 1.5px solid #a3b8cc; margin: 0 auto;"></div>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">EVALUACIÓN DE LA CAPACITACIÓN</td>
          <td style="border: 1px solid #000; padding: 8px; font-weight: bold; text-align: center; font-size: 11pt;">100%</td>
        </tr>
      </table>

      <div style="background-color: #ffff00; border: 1.5px solid #000; font-weight: bold; text-align: center; padding: 4px; font-size: 9.5pt; margin-bottom: 0;">
        OBSERVACIONES
      </div>
      <div style="border: 1.5px solid #000; border-top: none; padding: 12px; font-size: 9pt; line-height: 1.6;">
        <strong>INDUCCIÓN REALIZADA POR ASESOR HSEC:</strong> ${p.nombre || ''}<br>
        <strong>CEDULA IDENTIDAD:</strong> ${p.rut || ''}<br>
        <strong>REGISTRO SERNAGEOMIN / SNS:</strong> ${p.registroSNS || ''}
      </div>
    </div>
  `;
}

function generateComandanciaHTML(data, tipo) {
  const t = data.trabajador;
  const f = data.faena;
  const tr = data.tramite;
  const p = data.prevencionista;

  const nCertificado = '______';
  const fechaTextoLargo = formatDateToLongText(tr.fechaInduccion || tr.fechaTramite);

  return `
    <div class="printable-document comandancia-doc" style="padding: 15px 5px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px;">
        <div style="text-align: left;">
          ${ENAEX_SVG_LOGO}
        </div>
        <div class="comandancia-number" style="font-size: 12pt; font-weight: bold; color: #002d72; padding-top: 10px;">
          N° ${nCertificado}
        </div>
      </div>
      
      <div class="comandancia-title" style="font-size: 20pt; font-weight: bold; letter-spacing: 0.15em; margin-bottom: 50px; text-align: center; color: #002d72;">
        C E R T I F I C A D O
      </div>

      <div class="comandancia-body" style="font-size: 12pt; line-height: 1.8; text-align: justify; text-indent: 40px; margin-bottom: 60px; font-family: 'Times New Roman', Times, serif;">
        <strong>${p.nombre || ''}</strong>, R.U.T. <strong>${p.rut || ''}</strong>, 
        ${p.titulo || 'Ingeniero en Prevención de Riesgos'} de <strong>${f.empleador || 'Enaex Servicios S.A.'}</strong>, 
        REGISTRO SNS N° <strong>${p.registroSNS || ''}</strong>, 
        <strong>CERTIFICA QUE:</strong>
        <br><br>
        El Sr. <span style="text-decoration: underline; font-weight: bold; color: #002d72;">${t.nombre || ''}</span>, R.U.T. <span style="text-decoration: underline; font-weight: bold; color: #002d72;">${t.rut || ''}</span>, 
        quien presta servicios en <strong>Enaex Servicios S.A</strong>, posee los conocimientos técnicos 
        necesarios para desempeñarse como <strong>${tipo}</strong>.
        <br><br>
        Lo anterior a fin de ser presentado ante la <strong>AUTORIDAD FISCALIZADORA DE ${tr.autoridad || 'CALAMA'}</strong>, 
        con el fin de obtener la <strong>INSCRIPCION Y CREDENCIAL DE LICENCIA DE ${tipo}</strong>, 
        conforme a lo estipulado en Art. 226 del Decreto 83, Reglamento complementario Ley N° 17798.
      </div>

      <div class="comandancia-footer" style="margin-top: 40px; text-align: center; font-size: 11pt; display: flex; flex-direction: column; align-items: center;">
        <div style="font-weight: bold; color: #002d72; font-size: 12pt;">${p.nombre || ''}</div>
        <div style="font-size: 11pt; color: #475569;">${p.titulo || 'Ingeniero en Prevención de Riesgos'}</div>
        <div style="font-weight: bold; font-size: 11pt;">Enaex Servicios S.A.</div>
      </div>

      <div class="comandancia-date" style="text-align: center; margin-top: 50px; font-size: 11.5pt;">
        ${f.comunaLaboral || 'Calama'}, ${fechaTextoLargo}
      </div>
    </div>
  `;
}
