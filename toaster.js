class Toaster {

    show(options = {}) {
        const { message = 'Notification', type = 'info', duration = this.duration, url, newTab, closeable, position } = options;

        // Create container if needed
        let container = document.querySelector(`.toaster-${position}`);
        if (!container) {
            container = document.createElement('div');
            container.className = `toaster toaster-${position}`;
            document.body.appendChild(container);
        }

        // Create toast
        const toast = document.createElement('div');
        toast.className = `toaster-message ${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            ${closeable ? '<button class="toaster-close">&times;</button>' : ''}
        `;

        // Add to container
        container.appendChild(toast);

        //Clickable message

        if (url) {
            toast.style.cursor = 'pointer';
            toast.onclick = () => {
                if (newTab) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            };
        }

        // Close button
        toast.querySelector('.toaster-close').onclick = () => {
            toast.remove();
        };

        // Auto remove
        if (duration > 0) {
            setTimeout(() => toast.remove(), duration);
        }
    }

    success(message, options = {}) { this.show({ message, type: 'success', ...options }); }

    error(message, options = {}) { this.show({ message, type: 'error', ...options }); }
    warning(message, options = {}) { this.show({ message, type: 'warning', ...options }); }
    info(message, options = {}) { this.show({ message, type: 'info', ...options }); }
}

