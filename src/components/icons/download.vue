<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="button">{{ isOpen ? '选择生成类型' : '生成下载结果' }}</button>
    <div v-if="isOpen" class="dropdown-content" @click.stop>
      <a @click="selectOption('pdf')">PDF</a>
      <a @click="selectOption('txt')">TXT</a>
      <a @click="selectOption('doc')">DOC</a>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'Dropdown',
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const generateAndDownloadTxtFile = () => {
      const textContent = '这里放入你的文本内容。'; // 替换为你实际的文本内容
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = '下载的文件.txt'; // 指定文件名
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const generateAndDownloadDocFile = () => {
      const textContent = '这里放入你的文本内容。'; // 替换为你实际的文本内容
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = '下载的文件.doc'; // 指定文件名
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const generateAndDownloadPdfFile = () => {
      const textContent = '这里放入你的文本内容。'; // 替换为你实际的文本内容
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = '下载的文件.pdf'; // 指定文件名
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    const selectOption = (option) => {
      console.log('选择的选项:', option);
      isOpen.value = false;

      if (option === 'txt') {
        generateAndDownloadTxtFile();
      }

      if (option === 'pdf') {
        generateAndDownloadPdfFile();
      }

      if (option === 'doc') {
        generateAndDownloadDocFile();
      }
    };

    const closeDropdown = (event) => {
      if (!event.target.closest('.dropdown')) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('click', closeDropdown);
    });

    onUnmounted(() => {
      window.removeEventListener('click', closeDropdown);
    });

    return {
      isOpen,
      toggleDropdown,
      selectOption,
    };
  },
};
</script>


<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown button {
  border: none;
  cursor: pointer;
  background: #00253c;
  color: #cbcbcb;
  font-size: 18px;
  padding: 10px 20px; /* 根据需要调整内边距 */
  width: 150px; /* 设置按钮的宽度 */
  height: 20px; /* 设置按钮的高度 */
  line-height: 40px;
}

.dropdown-content {
  display: block !important;
  /* 其他样式... */
  position: absolute;
  background-color: #00253c;
  min-width: 160px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #cbcbcb;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}
</style>
