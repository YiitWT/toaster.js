class Toaster {

    show(options = {}) {
        const { message = 'Notification', type = 'info', duration = 1000, url, newTab = true, closeable = true, position = "top-right", style, animation = "slideIn" } = options;

        // Create container if needed
        let container = document.querySelector(`.toaster-${position}`);
        if (!container) {
            container = document.createElement('div');
            container.className = `toaster toaster-${position}`;
            document.body.appendChild(container);
        }

        // Create toast
        const toast = document.createElement('div');
        toast.style = style || '';
        toast.className = `toaster-message ${type}`;
        toast.style.animation = animation + " 0.3s ease-in-out";
        if (position.includes('left')) {
            toast.innerHTML = `
            ${closeable ? '<button class="toaster-close">&times;</button>' : ''}
            <span>${message}</span>
        `;
        }
        else {
            toast.innerHTML = `
            <span>${message}</span>
            ${closeable ? '<button class="toaster-close ">&times;</button>' : ''}
        `;
        }

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

        // Auto remove with fade out animation
        if (duration > 0) {
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.5s ease';
                setTimeout(() => toast.remove(), 500);
            }, duration);
        } else if (duration === 0) {
            toast.style.opacity = '1';
        }
    }

    success(message, options = {}) { this.show({ message, type: 'success', ...options }); }
    error(message, options = {}) { this.show({ message, type: 'error', ...options }); }
    warning(message, options = {}) { this.show({ message, type: 'warning', ...options }); }
    info(message, options = {}) { this.show({ message, type: 'info', ...options }); }
}

